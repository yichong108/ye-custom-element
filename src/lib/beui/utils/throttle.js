export function throttle(func, duration = 0) {
	let previous_call = Number.MIN_SAFE_INTEGER;

	return (...args) => {
		const current_call = Date.now();
		if (current_call - previous_call >= duration) {
			func(...args);
			previous_call = current_call;
		}
	};
}

export function debounce(fn, wait = 50, immediate) {
	let timer = null;
	return function(...args) {
		if (timer) clearTimeout(timer);
		if (immediate && !timer) {
			fn.apply(this, args);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, wait);
	};
}
