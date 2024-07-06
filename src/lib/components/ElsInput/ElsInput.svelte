<script>
	import { createEventDispatcher, tick } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '@/lib/utils/forwardEventsBuilder';

	const forwardEvents = forwardEventsBuilder(get_current_component());
	/**
	 * 输入值
	 * @type {string}
	 */
	export let value = '';
	/**
	 * 占位提示符
	 * @type {string}
	 */
	export let placeholder = '';
	/**
	 * 尺寸
	 * @type {string}
	 */
	export let size = 'medium';
	/**
	 * 是否只读
	 * @type {boolean}
	 */
	export let readonly = false;
	/**
	 * 是否禁用
	 * @type {boolean}
	 */
	export let disabled = false;
	/**
	 * 是否显示清除按钮
	 * @type {boolean}
	 */
	export let clearable = false;
	// TODO
	let suffixIcon = '';

	let input = null;
	let showClose = false;

	const showClear = () => (showClose = clearable && value && !readonly && !disabled);

	let suffix;
	let isInit = false;

	let dispatch = createEventDispatcher();

	// 在input失去焦点时触发
	function blur(event) {
		dispatch('blur', event);
	}

	// 在input获得焦点时触发
	function focus(event) {
		dispatch('focus', event);
	}

	// 仅在输入框失去焦点或用户按下回车时触发
	function change() {
		dispatch('change', value);
	}

	// 在 input 值改变时触发
	const onInput = () => {
		showClear();
		dispatch('input', value);
	};

	const clearValue = () => {
		value = '';
	};

	tick().then(() => {
		isInit = true;
	});
</script>

<div
	tabindex="-1"
	class:is-disabled={disabled}
	class:be-input--medium={size === 'medium'}
	class:be-input--small={size === 'small'}
	class:be-input--mini={size === 'mini'}
	style={`${$$props.style}; position: relative;`}
	on:click
	on:focus
	on:mouseover={showClear}
	on:mouseleave={() => (showClose = false)}
>
	<input
		{...$$restProps}
		tabindex="-1"
		type="text"
		{placeholder}
		bind:value
		class="be-input__inner"
		{readonly}
		{disabled}
		on:blur={blur}
		on:focus={focus}
		on:change={change}
		on:input={onInput}
		bind:this={input}
		use:forwardEvents
	/>
	{#if clearable || suffixIcon || $$slots.suffix}
		<span class={['be-input__suffix', disabled ? ' is-disabled' : ''].join('')}>
			<span class="be-input__suffix-inner">
				<slot name="suffix"></slot>
				{#if suffixIcon}
					<i class={['be-input__icon be-icon ', suffixIcon].join('')}></i>
				{/if}
				{#if value && clearable && showClose}
					<i class="be-input__icon be-icon be-icon-close-circle" on:click={clearValue}></i>
				{/if}
			</span>
		</span>
	{/if}
</div>
