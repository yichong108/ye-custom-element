<svelte:options customElement="{{tag: 'ye-cascader', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeCascader } from '@/lib/beui/index.js';
	import { defaultSize } from '@/lib/components/yeConfig';

	export let showAllLevels = true;
	/**
	 * 尺寸
	 * @type {string}
	 */
	export let size = defaultSize;
	export let value = [];
	export let width = '200px';
	export let dicData = [];

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.detail);
	}

</script>

<div
	class='ye-cascader'
	style='width: {width}'
>
	<BeCascader clearable='{false}' size='{size}' value={value} options='{dicData}' showAllLevels='{showAllLevels}'
							on:change={onChange} />
</div>

<style lang='scss'>
  .ye-cascader {
    position: relative;
  }
</style>
