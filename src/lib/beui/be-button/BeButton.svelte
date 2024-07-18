<script>
	import { filterClass } from '@/lib/beui/utils/beerui';

	export let style = null;
	export let type = 'primary';
	export let disabled = false;
	export let circle = false;
	export let round = false;

	const preClass = ['type', 'size'];
	let _class = '';

	$: {
		_class = [
			'be-button',
			...filterClass($$props, 'be-button--', preClass)
		].join(' ');
	}
</script>
<button
	class={_class}
	class:is-circle={circle}
	class:is-round={round}
	class:is-disabled={disabled}
	{style}
	on:click
	on:contextmenu
	on:dblclick
	on:focusin
	on:mousedown
	on:mouseup
	on:focusout
	on:keydown
	on:keyup
	on:pointercancel
	on:pointerdown
	on:pointerenter
	on:pointerleave
	on:pointermove
	on:pointerout
	on:pointerup
	on:input
	{disabled}
	type={type}
>
	<span>
		<slot></slot>
	</span>
</button>
