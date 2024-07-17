<script>
	import { createEventDispatcher } from 'svelte';
	import { BeDatePicker } from '@/lib/beui';
	import { decodeDatePropValue, encodeDatePropValue, styleObjectToString } from '@/lib/components/utils';

	const defaultValue = '202401';

	export let value = defaultValue;
	export let style = {};
	export let size = 'medium';

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

	let innerStyle = {
		width: '100px',
		...style
	};

</script>

<div
	class='ye-picker-month'
	style={styleObjectToString(innerStyle)}
>
	<BeDatePicker
		value={innerValue}
		clearable='{false}'
		placeholder='请选择'
		selectMode='month'
		on:change={onChange} />
</div>

<style lang='scss'>
  .ye-picker-month {
    position: relative;
  }
</style>
