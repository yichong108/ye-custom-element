<svelte:options customElement="{{tag: 'ye-cascader', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { styleObjectToString } from '@/lib/components/utils/index.js';
	import { BeCascader } from '@/lib/beui/index.js';

	export let showAllLevels = true;
	export let size = 'medium';
	export let value = [];
	export let style = {};
	export let dicData = [];

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.detail);
	}

	let innerStyle = {
		width: '120px',
		...style
	};
</script>

<div
	class='ye-cascader'
	style={styleObjectToString(innerStyle)}
>
	<BeCascader clearable='{false}' size='{size}' value={value} options='{dicData}' showAllLevels='{showAllLevels}'
							on:change={onChange} />
</div>

<style lang='scss'>
  .ye-cascader {
    position: relative;
  }
</style>
