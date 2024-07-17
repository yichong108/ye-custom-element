<svelte:options customElement="{{tag: 'ye-button', shadow: 'none'}}"></svelte:options>

<script>
	import { filterClass } from '../../utils/beerui';
	import { createEventDispatcher } from 'svelte';
	/**
	 * 设置样式
	 * @type {string}
	 */
	export let style = '';

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
	export let size = 'medium';

	export let testKebabCase = 'd'

	const preClass = ['type', 'size'];
	let _class = [];

	$: {
		_class = [
			'be-button',
			'be-button--medium',
			...filterClass($$props, 'be-button--', preClass)
		].join(' ');
	}

	let dispatch = createEventDispatcher();

	function onClick(e) {
		// 点击事件
		dispatch('click', e.detail);
	}
</script>

<button
	class={_class}
	{style}
	class:is-disabled={disabled}
	{disabled}
	type="button"
	on:click={onClick}
>
	<slot>{label}</slot>
</button>

<style lang="scss">
	@import '@/lib/theme/beer.css';
</style>
