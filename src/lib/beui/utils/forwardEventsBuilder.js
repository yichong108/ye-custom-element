import { bubble, listen, prevent_default, stop_propagation } from 'svelte/internal';

const oldModifierRegex =
	/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex =
	/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

export function forwardEventsBuilder(component) {
	let $on;
	let events = [];

	component.$on = (fullEventType, callback) => {
		let eventType = fullEventType;
		let destructor = () => {};
		if ($on) {
			destructor = $on(eventType, callback);
		} else {
			events.push([eventType, callback]);
		}
		const oldModifierMatch = eventType.match(oldModifierRegex);

		if (oldModifierMatch && console) {
			console.warn(
				'Event modifiers in BEERUI now use "$" instead of ":", so that ' +
					'all events can be bound with modifiers. Please update your ' +
					'event binding: ',
				eventType
			);
		}

		return () => {
			destructor();
		};
	};

	function forward(e) {
		bubble(component, e);
	}

	return (node) => {
		const destructors = [];
		const forwardDestructors = {};

		$on = (fullEventType, callback) => {
			let eventType = fullEventType;
			let handler = callback;
			let options = false;
			const oldModifierMatch = eventType.match(oldModifierRegex);
			const newModifierMatch = eventType.match(newModifierRegex);
			const modifierMatch = oldModifierMatch || newModifierMatch;
			if (eventType.match(/^SMUI:\w+:/)) {
				const newEventTypeParts = eventType.split(':');
				let newEventType = '';
				for (let i = 0; i < newEventTypeParts.length; i++) {
					newEventType +=
						i === newEventTypeParts.length - 1
							? ':' + newEventTypeParts[i]
							: newEventTypeParts[i]
									.split('-')
									.map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
									.join('');
				}
				console.warn(
					`The event ${eventType.split('$')[0]} has been renamed to ${newEventType.split('$')[0]}.`
				);
				eventType = newEventType;
			}
			if (modifierMatch) {
				const parts = eventType.split(oldModifierMatch ? ':' : '$');
				eventType = parts[0];
				const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
				if (eventOptions.passive) {
					options = options || {};
					options.passive = true;
				}
				if (eventOptions.nonpassive) {
					options = options || {};
					options.passive = false;
				}
				if (eventOptions.capture) {
					options = options || {};
					options.capture = true;
				}
				if (eventOptions.once) {
					options = options || {};
					options.once = true;
				}
				if (eventOptions.preventDefault) {
					handler = prevent_default(handler);
				}
				if (eventOptions.stopPropagation) {
					handler = stop_propagation(handler);
				}
			}

			const off = listen(node, eventType, handler, options);
			const destructor = () => {
				off();
				const idx = destructors.indexOf(destructor);
				if (idx > -1) {
					destructors.splice(idx, 1);
				}
			};

			destructors.push(destructor);

			if (!(eventType in forwardDestructors)) {
				forwardDestructors[eventType] = listen(node, eventType, forward);
			}

			return destructor;
		};

		for (let i = 0; i < events.length; i++) {
			$on(events[i][0], events[i][1]);
		}

		return {
			destroy: () => {
				for (let i = 0; i < destructors.length; i++) {
					destructors[i]();
				}

				for (let entry of Object.entries(forwardDestructors)) {
					entry[1]();
				}
			}
		};
	};
}
