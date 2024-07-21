<svelte:options
  customElement={{ tag: "ye-picker-day-range", shadow: "none" }}
/>

<script>
  import { createEventDispatcher } from "svelte";
  import YeDatePicker from "@/library/ui/yeui/YeDatePicker/YeDatePicker.svelte";
  import { defaultSize } from "@/library/ui/yeui/yeConfig.js";

  const minWidth = "240px";

  export let value = {
    beginTime: "20240101",
    endTime: "20240102",
  };

  /**
   * 宽
   * @type {string}
   */
  export let width = minWidth;

  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;

  const dispatch = createEventDispatcher();

  function onChange(e) {
    dispatch("change", e.detail);
  }
</script>

<div class="ye-picker-day-range" style="width: {width}; min-width: {minWidth}">
  <YeDatePicker
    value={value}
    width="100%"
    clearable={false}
    {size}
    placeholder="请选择"
    selectMode="daterange"
    valueFormat="YYYYMMDD"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-day-range {
    position: relative;
  }
</style>
