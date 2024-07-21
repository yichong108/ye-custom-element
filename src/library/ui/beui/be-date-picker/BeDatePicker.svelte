<script>
  import BeIcon from "../be-icon/BeIcon.svelte";
  import Dates from "./panel/date.svelte";
  import DateTimeRange from "./panel/date-time-range.svelte";
  import DateRange from "./panel/date-range.svelte";
  import MonthRange from "./panel/month-range.svelte";
  import YearRange from "./panel/year-range.svelte";
  import BeInput from "../be-input/BeInput.svelte";
  import { FormatTime } from "@/library/ui/beui/utils/beerui.js";
  import { createEventDispatcher, getContext, onDestroy, onMount, tick } from "svelte";
  import tippy from "tippy.js";

  const dispatch = createEventDispatcher();

  const DEFAULT_FORMATS = {
    date: "yyyy-MM-dd",
    month: "yyyy-MM",
    daterange: "yyyy-MM-dd",
    datetime: "yyyy-MM-dd HH:mm:ss",
    datetimerange: "yyyy-MM-dd HH:mm:ss",
    monthrange: "yyyy-MM",
    year: "yyyy",
    yearrange: "yyyy",
  };

  export let value;
  export let selectMode = "date";
  export let format = DEFAULT_FORMATS[selectMode];
  export let selectableRange = [];
  export let valueFormat;
  export let placeholder = "选择日期";
  export let startPlaceholder = "开始时间";
  export let endPlaceholder = "结束时间";
  export let separator = "至";
  export let clearable = true;
  export let disabled = false;
  export let readonly = true;
  export let validateEvent = true; // 是否发送验证表单
  export let disabledDate;
  export let size;

  let active = false;
  let displayValue = [];
  if (format && !valueFormat) valueFormat = format;
  const valueFormats = new FormatTime(valueFormat);
  const formats = new FormatTime(format);
  let inputRect;
  let direction = "bottom";
  let visible;
  let input;
  let ranged = selectMode.indexOf("range") > -1;
  // 临时用，存储各个类型的日期容器高度
  let temporaryHeight = {
    date: 343,
    month: 266,
    year: 266,
    datetime: 380,
    daterange: 331,
    monthrange: 254,
    datetimerange: 384,
  };

  // let referenceElement;
  let contentElement;
  let instance;

  // 日期格式化
  $: initValue(value);

  function initValue(initVal) {
    if (!initVal) {
      value = "";
      displayValue = [];
      return;
    }
    if (!ranged) {
      const date = new Date(initVal);
      value = isInvalidDate(date) ? "" : formatDate(date);
      return;
    }
    if (Array.isArray(initVal)) {
      const dateStart = new Date(String(initVal[0]));
      let endStart = new Date(String(initVal[1]));
      const start = isInvalidDate(dateStart) ? "" : formatDate(dateStart);
      const end = isInvalidDate(endStart) ? "" : formatDate(endStart);
      displayValue = [start, end];
    } else {
      throw new Error("value must be array！");
    }
  }

  const isInvalidDate = (date) => {
    return date == "Invalid Date";
  };
  $: if (visible) {
    const clientRect = inputRect && inputRect.getBoundingClientRect();
    const clientHeight = document.body.clientHeight;
    if (
      clientRect &&
      clientRect.bottom + temporaryHeight[selectMode] > clientHeight
    ) {
      direction = "top";
    } else {
      direction = "bottom";
    }
  }

  function confirmPick(e) {
    value = formatDate(e.detail);
    // 让上面的active出来再运行
    tick().then(() => {
      instance.hide();
      dispatch("change", formats.setTime(e.detail));
    })
  }

  function handleShowDatePopper(e) {
    active = true;
    visible = true;
  }

  function handleChange() {
    instance.hide();
    visible = false;
  }

  function formatDate(time) {
    return valueFormats.setTime(time);
  }

  function handleCloseDatePopper() {
    active = false;
    visible = false;
  }

  const handleStartInput = () => {
  };
  const handleStartChange = () => {
  };
  const handleFocus = () => {
  };
  const confirmRangePick = (val) => {
    const dates = [formatDate(val.detail[0]), formatDate(val.detail[1])];
    displayValue = dates;
    value = dates;

    // 让上面的active出来再运行
    tick().then(() => {
      instance.hide();
      dispatch("change", dates);
    })
  };
  const handlerClear = () => {
    displayValue = [];
    value = null;
    instance.hide();
    dispatch("change", value);
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

  onMount(() => {
    instance = tippy(inputRect, {
      content: contentElement, // 替换为你的实际内容
      appendTo: () => document.body,
      interactive: true, // 允许用户交互（例如，将鼠标悬停到弹出框上时不关闭）
      trigger: "click", // 触发方式，可以是 'click', 'hover', 'focus', 等
      placement: "bottom-start", // 弹出框位置
      allowHTML: true, // 允许在弹出框中使用 HTML
      arrow: true,
      theme: "light",
      maxWidth: 'none',
      onCreate(instance) {
        instance.popper.classList.add('be-tippy-popover-custom-class');
      },
      onShow(instance) {
        let boxEl = instance.popper.querySelector(".tippy-content");
        let boxEl2 = instance.popper.querySelector(".tippy-box");

        boxEl2.style['max-width'] = 'auto';

        boxEl.style.padding = "0";
        boxEl.style["box-shadow"] = "none";
        boxEl.style["display"] = "inline-block";

        // boxEl2.style.background = "transparent";
        // boxEl2.style["box-shadow"] = "none";

        handleShowDatePopper()
      },
      onHide(instance) {
        // 在弹框隐藏时执行的操作
      },
      onHidden(instance) {
        setTimeout(() => {
          handleCloseDatePopper();
        })
      },
    });
  });

  onDestroy(() => {
    if (instance) {
      instance.destroy();
    }
  })

  function makeTransparent(node) {
    node.style.all = "unset"; // 清除所有样式
  }
</script>

{#if ranged}
  <div
    class="be-date be-range be-input--{size}"
  >
    <div
      role="button"
      tabindex="-1"
      class="be-input__inner be-range-{selectMode}"
      class:active
      on:click={handleShowDatePopper}
      on:keydown
      bind:this={inputRect}
    >
      <BeIcon name="calendar" />
      <input
        autocomplete="off"
        placeholder={startPlaceholder}
        bind:value={displayValue[0]}
        {disabled}
        {readonly}
        on:input={handleStartInput}
        on:change={handleStartChange}
        on:focus={handleFocus}
        class="be-range-input"
      />
      <span class="be-range-separator">{separator}</span>
      <input
        autocomplete="off"
        placeholder={endPlaceholder}
        bind:value={displayValue[1]}
        {disabled}
        {readonly}
        on:input={handleStartInput}
        on:change={handleStartChange}
        on:focus={handleFocus}
        class="be-range-input"
      />
      <div
        role="button"
        tabindex="-1"
        class="be-range__close-icon"
        class:clearable={clearable && displayValue && displayValue.length > 0}
        on:click|stopPropagation={handlerClear}
        on:keydown|stopPropagation
      >
        <BeIcon name="close-circle" width="14" height="14" color="#c0c4cc" />
      </div>
    </div>

    <div bind:this={contentElement} use:makeTransparent>
      {#if selectMode === "datetimerange"}
        <DateTimeRange
          bind:visible
          {direction}
          {format}
          value={displayValue}
          {disabledDate}
          on:pick={confirmRangePick}
        />
      {:else if selectMode === "monthrange"}
        <MonthRange
          bind:visible
          {size}
          {direction}
          value={displayValue}
          {disabledDate}
          on:pick={confirmRangePick}
        />
      {:else if selectMode === "yearrange"}
        <YearRange
          bind:visible
          {size}
          {direction}
          value={displayValue}
          {disabledDate}
          on:pick={confirmRangePick}
        />
      {:else}
        <DateRange
          bind:visible
          {size}
          {direction}
          value={displayValue}
          {disabledDate}
          on:pick={confirmRangePick}
        />
      {/if}
    </div>

  </div>
{:else}
  <div
    class="be-date"
    bind:this={inputRect}
  >
    <BeInput
      {size}
      validateEvent={false}
      {disabled}
      {readonly}
      bind:value
      {placeholder}
      on:focus={handleShowDatePopper}
      bind:this={input}
    />
    <div class="be-date__prefix">
      <BeIcon name="calendar" />
    </div>
    <div
      role="button"
      tabindex="-1"
      class="be-date__suffix"
      class:clearable={clearable && value}
      on:click|stopPropagation={handlerClear}
      on:keydown|stopPropagation
    >
      <BeIcon name="close-circle" width="14" height="14" color="#c0c4cc" />
    </div>
    <div bind:this={contentElement} use:makeTransparent>
      <Dates
        {valueFormat}
        {direction}
        {selectableRange}
        {disabledDate}
        {value}
        {selectMode}
        {format}
        bind:visible
        on:pick={confirmPick}
      />
    </div>
  </div>
{/if}
