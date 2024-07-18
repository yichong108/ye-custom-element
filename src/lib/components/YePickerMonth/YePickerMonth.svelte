<svelte:options customElement="{{tag: 'ye-picker-month', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeDatePicker } from '@/lib/beui';
	import { decodeDatePropValue, encodeDatePropValue, styleObjectToString } from '@/lib/components/utils';
	import { defaultSize } from '@/lib/components/yeConfig.js';

	const defaultValue = '202401';

	export let value = defaultValue;
	export let width = '200px';
	/**
	 * 尺寸
	 * @type {string}
	 */
	export let size = defaultSize;

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
	class='ye-picker-month'
	style="width: {width}"
>
	<BeDatePicker
		value={innerValue}
		clearable='{false}'
		size={size}
		placeholder='请选择'
		selectMode='month'
		on:change={onChange} />
</div>

<style lang='scss'>
  .ye-picker-month {
    position: relative;
  }
</style>
