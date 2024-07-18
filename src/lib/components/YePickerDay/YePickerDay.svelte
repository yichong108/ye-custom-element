<svelte:options customElement="{{tag: 'ye-picker-day', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeDatePicker } from '@/lib/beui/index.js';
	import { decodeDatePropValue, encodeDatePropValue, styleObjectToString } from '@/lib/components/utils/index.js';

	const defaultValue = '202401';

	export let value = defaultValue;
	export let width = '200px';
	export let size = '';

	const dispatch = createEventDispatcher();

	function onChange(e) {
		let val = decodeDatePropValue(e.detail);
		dispatch('change', val);
	}

	let innerValue = '';

	$: {
		if (value) {
			innerValue = encodeDatePropValue(value);
		} else {
			innerValue = '';
		}
	}

</script>

<div
	class='ye-picker-day'
	style="width: {width}"
>
	<BeDatePicker
		value={innerValue}
		size={size}
		clearable='{false}'
		placeholder='请选择'
		selectMode='date'
		on:change={onChange} />
</div>

<style lang='scss'>
  .ye-picker-day {
    position: relative;
  }
</style>
