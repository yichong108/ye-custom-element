<script>
  import BeIcon from "@/library/ui/beui/be-icon/BeIcon.svelte";
  import BeInput from "@/library/ui/beui/be-input/BeInput.svelte";
  import {
    createEventDispatcher,
    getContext,
    onDestroy,
    onMount,
    setContext,
    tick,
  } from "svelte";
  import clickOutside from "@/library/ui/beui/_actions/clickOutside.js";
  import {
    filterClass,
    getScrollContainer,
  } from "@/library/ui/beui/utils/beerui.js";
  import CascaderPanel from "./cascader-panel.svelte";
  import Store from "./store.js";

  const dispatch = createEventDispatcher();
  export let options;
  export let expandTrigger = "click";
  // 下拉框选中的值
  export let value = [];
  // export let size;
  // 是否显示所有层级
  export let showAllLevels = true;
  // 是否取消父子关联
  export let checkStrictly = false;
  // 配置选项
  export let config = {
    value: "value",
    label: "label",
    children: "children",
  };
  // 是否开启动态加载
  export let lazy = false;
  // 动态加载方法
  export let lazyLoad = (node, resolve) => {};
  // 是否禁用
  export let disabled = false;
  // 位置
  export let clearable = true;
  export let placeholder = "请选择";
  export let validateEvent = true; // 是否发送验证表单
  export let size;

  let store = new Store(options, $$props);
  setContext("store", store);
  // 显示的值
  let inputValue = store.label;
  let selectValue = null;
  // let cascaderStore
  const preClass = ["size"];
  const _class = [
    "be-cascader",
    ...filterClass($$props, "be-cascader--", preClass),
  ].join(" ");
  // 下拉框
  let visible = false;
  let cascaderRect;
  let left;
  let bottom;
  let clientRect;
  let scrollDom;
  let menus = [];
  // 获取输入框
  let showClose = false;
  config = store.config;
  let level = 0;
  if (!showAllLevels)
    inputValue = inputValue.slice(inputValue.length - 1, inputValue.length);
  $: {
    store.menus = [];
    store.label = [];
    store.value = [];
    store.level = level;
    store.options = options;
    store.defaultValue = value;
    selectValue = getLastValue();
    store.init();
    inputValue = showAllLevelsData(store.label);
    menus = store.getMenus();
  }
  const getLastValue = () => {
    return Array.isArray(value) ? value[value.length - 1] : value;
  };
  const clearValue = () => {
    inputValue = [];
    value = [];
    showClose = false;
    visible = false;
    store.clear();
    dispatch("change", value);
  };
  const mousedownHandle = () => {
    visible = true;
  };
  try {
    window.onresize = function () {
      getLeft();
    };
  } catch (e) {
    console.log("no window");
  }
  $: if (visible) {
    getLeft();
  }
  onMount(() => {
    try {
      scrollDom = getScrollContainer(cascaderRect, true);
      if (scrollDom) {
        scrollDom.addEventListener("scroll", calcBottom);
      }
    } catch (e) {
      console.log("scrollDom error");
    }
  });
  const calcBottom = () => {
    clientRect = cascaderRect.getBoundingClientRect();
    bottom = { status: "scroll", value: clientRect.bottom };
  };
  onDestroy(() => {
    try {
      scrollDom.removeEventListener("scroll", calcBottom);
    } catch (e) {
      console.log(e);
    }
  });
  const getLeft = () => {
    clientRect = cascaderRect.getBoundingClientRect();
    left = clientRect.left;
    bottom = { status: "update", value: clientRect.bottom };
  };
  const change = (e) => {
    // inputValue = showAllLevelsData(e.detail.label);
    value = checkStrictly
      ? [e.detail.selectValue]
      : showAllLevelsData(e.detail.value);
    if (!checkStrictly) visible = false;
    dispatch("change", value);
  };
  const showAllLevelsData = (data) => {
    return showAllLevels ? data : data.slice(data.length - 1, data.length);
  };
  // 表单验证
  const ctx = getContext("BeFormItem");
  let prop = ""; // name
  let isInit = false;
  if (ctx) {
    ctx.propWatch.subscribe((value) => (prop = value));
  }

  const watchValue = (value) => {
    if (ctx && prop && isInit && validateEvent) {
      ctx.FormItemEventCallback({ type: "change", value: [value] });
    }
  };
  $: watchValue(value);
  tick().then(() => {
    isInit = true;
  });
</script>

<div
  role="button"
  tabindex="-1"
  class={_class}
  class:be-select--disabled={disabled}
  style={$$props.style}
  bind:this={cascaderRect}
  use:clickOutside={{ cb: () => (visible = false) }}
  on:click
  on:contextmenu
  on:dblclick
  on:focusin
  on:mousedown
  on:mouseup={mousedownHandle}
  on:focusout
  on:keydown
  on:keyup
>
  <div
    role="button"
    tabindex="-1"
    on:mouseover={() => {
      if (clearable && inputValue.length) showClose = true;
    }}
    on:mouseleave={() => {
      if (clearable && inputValue.length) showClose = false;
    }}
    on:focus
  >
    <BeInput
      {size}
      {placeholder}
      value={inputValue.join("/")}
      readonly
      {disabled}
    >
      <div slot="suffix">
        <div
          class="input-suffix-icon"
          class:is-reverse={visible && !showClose}
          style="display:{!showClose ? 'block' : 'none'}"
        >
          <BeIcon name="chevron-down" width="18" height="18" />
        </div>
        <div
          role="button"
          tabindex="-1"
          on:click={clearValue}
          on:keydown
          class:close={showClose}
          style="display:{showClose ? 'block' : 'none'};margin-right:2px"
        >
          <BeIcon name="close-circle" width="14" height="14" />
        </div>
      </div>
    </BeInput>
  </div>
  <CascaderPanel
    {visible}
    {selectValue}
    {bottom}
    {menus}
    {left}
    {config}
    {expandTrigger}
    {checkStrictly}
    {lazy}
    {lazyLoad}
    on:change={change}
  />
</div>
