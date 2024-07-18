<svelte:options customElement="{{tag: 'ye-picker-year', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeDatePicker } from '@/lib/beui';
	import { decodeDatePropValue, encodeDatePropValue, styleObjectToString } from '@/lib/components/utils';

	const defaultValue = '2024';

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
	class='ye-picker-year'
	style="width: {width}"
>
	<BeDatePicker
		value={innerValue}
		clearable='{false}'
		size={size}
		placeholder='请选择'
		selectMode='year'
		on:change={onChange} />
</div>

<style lang='scss'>
  .ye-picker-year {
    position: relative;
  }
</style>
