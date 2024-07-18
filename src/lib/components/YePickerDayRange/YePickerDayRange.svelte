<svelte:options customElement="{{tag: 'ye-picker-day-range', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeDatePicker } from '@/lib/beui';
	import { decodeDatePropValue, encodeDatePropValue, styleObjectToString } from '@/lib/components/utils';
	import { defaultSize } from '@/lib/components/yeConfig';

	const defaultValue = {
		beginTime: '20240101',
		endTime: '20240201'
	};

	export let value = defaultValue;
	export let width = '240px';
	export let size = defaultSize;

	if (!valid(value)) {
		console.warn('时间范围数据格式错误');
	}

	function valid(value) {
		return Object.hasOwn(value, 'beginTime') && Object.hasOwn(value, 'endTime');
	}

	const dispatch = createEventDispatcher();

	function onChange(e) {
		let arr = e.detail;
		let beginTime = decodeDatePropValue(arr[0]);
		let endTime = decodeDatePropValue(arr[1]);
		let val = {
			beginTime,
			endTime
		};
		dispatch('change', val);
	}

	let innerValue = '';

	$: {
		let val = value || defaultValue;
		if (valid(val)) {
			let beginTime = encodeDatePropValue(val.beginTime);
			let endTime = encodeDatePropValue(val.endTime);
			innerValue = [new Date(beginTime), new Date(endTime)];
		}
	}
</script>

<div
	style="width: {width}"
	class='ye-picker-day-range'
>
	<BeDatePicker
		value={innerValue}
		clearable='{false}'
		size={size}
		placeholder='请选择'
		selectMode='daterange'
		on:change={onChange} />
</div>

<style lang='scss'>
  .ye-picker-day-range {
    position: relative;
  }
</style>
