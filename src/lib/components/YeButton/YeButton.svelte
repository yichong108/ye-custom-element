<svelte:options customElement="{{tag: 'ye-button', shadow: 'none'}}"></svelte:options>

<script>
	import { createEventDispatcher } from 'svelte';
	import { BeButton } from '@/lib/beui/index.js';

	export let width = 'auto';

	/**
	 * 是否关闭
	 * @type {boolean}
	 */
	export let disabled = false;

	/**
	 * 按钮文案
	 * @type {string}
	 */
	export let label = '按钮';

	/**
	 * 类型
	 * 'primary'|'success'|'warning'|'danger'|'info'
	 * @type {string}
	 */
	export let type = 'primary';

	/**
	 * 大小
	 * 'small'|'medium'|'large'
	 * @type string 类型
	 */
	export let size = '';

	let dispatch = createEventDispatcher();

	function onClick(e) {
		// 点击事件
		dispatch('click', e.detail);
	}
</script>

<div class='ye-button' style='width: {width}'>
	<BeButton style='width: 100%;' disabled='{disabled}' type='{type}' size='{size}' on:click={onClick}>
		{label}
	</BeButton>
</div>

<style lang='scss'>
	.ye-button {
		display: inline-block;
	}
</style>

