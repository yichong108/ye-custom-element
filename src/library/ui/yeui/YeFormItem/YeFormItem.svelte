<svelte:options customElement={{ tag: "ye-form-item", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import YeRadioButton from "@/library/ui/yeui/YeRadioButton/YeRadioButton.svelte";
  import YePickerDay from "@/library/ui/yeui/YePickerDay/YePickerDay.svelte";
  import YePickerDayRange from "@/library/ui/yeui/YePickerDayRange/YePickerDayRange.svelte";
  import YePickerMonth from "@/library/ui/yeui/YePickerMonth/YePickerMonth.svelte";
  import YePickerMonthRange from "@/library/ui/yeui/YePickerMonthRange/YePickerMonthRange.svelte";
  import YePickerYear from "@/library/ui/yeui/YePickerYear/YePickerYear.svelte";
  import YePickerYearRange from "@/library/ui/yeui/YePickerYearRange/YePickerYearRange.svelte";
  import YeSelect from "@/library/ui/yeui/YeSelect/YeSelect.svelte";
  import YeCascader from "@/library/ui/yeui/YeCascader/YeCascader.svelte";

  /**
   * 组件别名
   */
  export let type;

  /**
   * 组件宽
   */
  export let width;

  /**
   * 值
   */
  export let value;

  /**
   * 尺寸
   * @type {string}
   */
  export let size = "small";

  /**
   * 组件各自的参数
   * @type {object}
   */
  export let componentProps = {};

  let currentValue = value;

  const getTagName = (type) => {
    const componentMap = {
      "select": YeSelect,
      "cascader": YeCascader,
      "picker-day": YePickerDay,
      "picker-month": YePickerMonth,
      "picker-year": YePickerYear,
      "picker-day-range": YePickerDayRange,
      "picker-month-range": YePickerMonthRange,
      "picker-year-range": YePickerYearRange,
      "radio-button": YeRadioButton,
    };
    if (!componentMap[type]) {
      console.error(`没有type为${type}对应的组件`);
    }
    return componentMap[type];
  };

  const dispatch = createEventDispatcher();

  const handleChange = (e) => {
    dispatch("change", e.detail);
  };

  // Watch for changes in value and update currentValue accordingly
  $: currentValue = value;
</script>

{#if getTagName(type)}
  <svelte:component
    {...componentProps}
    this={getTagName(type)}
    width="{width}"
    bind:value={currentValue}
    size={size}
    on:change={handleChange}
  />
{/if}