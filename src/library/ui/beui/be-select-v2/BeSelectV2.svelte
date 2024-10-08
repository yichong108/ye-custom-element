<script>
  import BeInput from "../be-input/BeInput.svelte";
  import {
    createEventDispatcher,
    getContext,
    onMount,
    setContext,
    tick,
  } from "svelte";
  import SelectStore from "./select.js";
  import { debounce } from "@/library/ui/beui/utils/throttle.js";
  import tippy from "tippy.js";

  let dispatch = createEventDispatcher();
  // 下拉框选中的值
  export let value;
  export let size;
  export let name = "";
  export let maxHeight = "300px";
  export let multiple = false; // 是否多选
  export let multipleLimit = 0; // 多选时用户最多可以选择的项目数，为 0 则不限制
  export let collapseTags = false; // 多选 收缩
  export let autocomplete = "off"; // 多选 收缩
  export let disabled = false; // 是否禁用
  export let position = "bottom"; // 位置
  export let clearable = false;
  export let placeholder = "请选择";
  export let validateEvent = true; // 是否发送验证表单

  let inner = false; // 是否是内部改变的值
  let render = false;
  const newInitStore = () =>
    multiple ? store.setMultipleCurrentValue() : setCurrentValue();
  const store = new SelectStore({
    value,
    multiple,
    multipleLimit,
    collapseTags,
  });
  setContext("selectStore", store);
  const subscribeHandle = debounce(async (item) => {
    if (!render) return;
    if (store.isChange) {
      inner = true; // 内部更新值
      value = store.value; // 设置value
      store.multipleValue = store.multipleValue;
      inputValue = item.label; // 设置输入框的值
      await tick();
      inner = false;
      dispatch("change", store.value); // 值发生改变的时候发送给用户
    }
    if (!multiple) handleClosePopper();
  }, 20);
  store.subscribe.push(subscribeHandle);
  let optionSize = 0;
  const getSize = async (size) => {
    optionSize = size;
    await tick();
    newInitStore(); // fixed async load options data
  };
  store.sizeSubscribe.push(getSize);
  let inputValue = "";
  let visible = false; // 下拉框
  let input; // 获取输入框
  let showClose = false;
  // $:initValue(value)
  $: if (visible) {
    dispatch("visibleChange", visible);
    store.setHover(value);
  }

  export const setValue = (value) => {
    if (!inner) {
      store.value = value;
      newInitStore();
    }
  };
  $: setValue(value);

  // 表单验证
  const ctx = getContext("BeFormItem");
  let prop = ""; // name
  if (ctx) {
    ctx.propWatch.subscribe((value) => (prop = value));
  }
  let isInit = false;
  const watchValue = (value) => {
    if (ctx && prop && isInit && validateEvent) {
      ctx.FormItemEventCallback({ type: "change", value: [value] });
    }
  };
  $: watchValue(value);

  const setCurrentValue = () => {
    let node = store.getCurrent(value);
    inputValue = node?.label;
  };
  // 打开关闭下拉功能
  const handleShowPopper = () => (visible = true);
  const handleClosePopper = () => {
    visible = false;
  };
  const toggleVisible = () => {
    if (disabled) return;
    visible = !visible;
  };
  const clearValue = () => {
    store.setCurrent({ label: "", value: "" });
    showClose = false;
    handleClosePopper();
    dispatch("clear", "");
  };

  const closeMultipleHandle = (item) => {
    store.toggleMultiple(item);
    dispatch("removeTag", item);
  };

  let _class = "";
  export { _class as class };
  tick().then(() => {
    render = true;
    isInit = true;
    newInitStore();
  });

  let referenceElement;
  let contentElement;
  let instance;

  const dispatcher = createEventDispatcher();

  $: {
    if (instance) {
      if (visible) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  }

  onMount(() => {
    instance = tippy(referenceElement, {
      content: contentElement, // 替换为你的实际内容
      appendTo: () => document.body,
      interactive: true, // 允许用户交互（例如，将鼠标悬停到弹出框上时不关闭）
      trigger: "click", // 触发方式，可以是 'click', 'hover', 'focus', 等
      placement: "bottom", // 弹出框位置
      allowHTML: true, // 允许在弹出框中使用 HTML
      arrow: false,
      theme: "light",
      // offset: [0, 10],
      onShow(instance) {
        const referenceWidth = instance.reference.getBoundingClientRect().width;
        instance.popper.style.width = `${referenceWidth}px`;
        let boxEl = instance.popper.querySelector(".tippy-content");
        let boxEl2 = instance.popper.querySelector(".tippy-box");
        boxEl.style.padding = "5px 0";
        // boxEl2.style.left = '-5px';
        // 设置最大高度和溢出滚动条
        // instance.popper.style.maxHeight = '150px';
        // instance.popper.style.overflowY = 'auto';

        visible = true;
      },
      onHide(instance) {
        visible = false;
        // 在弹框隐藏时执行的操作
      },
    });
  });
</script>

<div class="be-select be-select--{size} {_class}">
  {#if multiple}
    <div
      role="button"
      tabindex="-1"
      class="be-select__tags"
      on:click|stopPropagation={toggleVisible}
      on:keydown|stopPropagation={toggleVisible}
      on:mouseover={() => {
        if (clearable && inputValue) showClose = true;
      }}
      on:mouseleave={() => {
        if (clearable && inputValue) showClose = false;
      }}
      on:focus
    >
      {#if collapseTags && store.value.length > 0}
        <span class="be-tag">
          <span class="be-tag-text">{store.multipleValue[0].label}</span>
          <span
            class="be-tag-close"
            role="button"
            tabindex="-1"
            on:click|stopPropagation={() =>
              closeMultipleHandle(store.multipleValue[0])}
            on:keydown|stopPropagation
          >
            <i class="be-icon be-icon-close"></i>
          </span>
        </span>
        {#if store.value.length > 1}
          <span class="be-tag">
            <span class="be-tag-text">+{store.value.length - 1}</span>
          </span>
        {/if}
      {:else}
        {#each store.multipleValue as item}
          <span class="be-tag">
            <span class="be-tag-text">{item.label}</span>
            <span
              class="be-tag-close"
              role="button"
              tabindex="-1"
              on:click|stopPropagation={() => closeMultipleHandle(item)}
              on:keydown
            >
              <i class="be-icon be-icon-close"></i>
            </span>
          </span>
        {/each}
      {/if}
      <div class="be-tag-suffix">
        <div
          class="be-tag-suffix-icon"
          class:is-reverse={visible && !showClose}
          style="display:{!showClose ? 'block' : 'none'}"
        >
          <i class="be-icon be-icon-chevron-down"></i>
        </div>
        <div
          role="button"
          tabindex="-1"
          on:click|stopPropagation={clearValue}
          on:keydown|stopPropagation
          class:close={showClose}
          style="display:{showClose ? 'block' : 'none'};margin-right:2px"
        >
          <i class="be-icon be-icon-close-circle"></i>
        </div>
      </div>
    </div>
    <div class="be-select__option" class:visible>
      <ul
        class={[
          "be-select__option_content",
          position === "top" ? " is_top" : "",
        ].join("")}
        style:max-height={maxHeight}
      >
        <slot></slot>
        {#if optionSize === 0}
          <div class="be-select-dropdown__empty">无数据</div>
        {/if}
      </ul>
      <div class="popper__arrow"></div>
    </div>
  {:else}
    <div
      bind:this={referenceElement}
      on:keydown|stopPropagation
      on:focus
      on:mouseover={() => {
        if (clearable && inputValue) showClose = true;
      }}
      on:mouseleave={() => {
        if (clearable && inputValue) showClose = false;
      }}
    >
      <BeInput
        {name}
        {placeholder}
        value={inputValue}
        bind:this={input}
        readonly
        on:blur={(e) => dispatch("blur", e)}
        on:focus={(e) => dispatch("focus", e)}
        {disabled}
        autocomplete={autocomplete !== "off"}
      >
        <div slot="suffix">
          <div
            class="input-suffix-icon"
            class:is-reverse={visible && !showClose}
            style="display:{!showClose ? 'block' : 'none'}"
          >
            <i class="be-icon be-icon-chevron-down"></i>
          </div>
          <div
            role="button"
            tabindex="-1"
            on:click|stopPropagation={clearValue}
            on:keydown
            class:close={showClose}
            style="display:{showClose ? 'block' : 'none'};margin-right:2px"
          >
            <i class="be-icon be-icon-close-circle"></i>
          </div>
        </div>
      </BeInput>
    </div>
    <div bind:this={contentElement} class="be-select__option">
      <ul
        style="overflow: auto;"
        class={[
          "be-select__option_content",
          position === "top" ? " is_top" : "",
        ].join("")}
        style:max-height={maxHeight}
      >
        <slot></slot>
        {#if optionSize === 0}
          <div class="be-select-dropdown__empty">无数据</div>
        {/if}
      </ul>
      <div class="popper__arrow"></div>
    </div>
  {/if}
</div>
