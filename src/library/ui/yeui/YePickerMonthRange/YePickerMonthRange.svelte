<svelte:options
  customElement={{ tag: "ye-picker-month-range", shadow: "none" }}
/>

<script>
  import { createEventDispatcher } from "svelte";
  import { defaultSize } from "@/library/ui/yeui/yeConfig.js";
  import YeDatePicker from "@/library/ui/yeui/YeDatePicker/YeDatePicker.svelte";

  const minWidth = "210px";

  export let value = {
    beginTime: "202401",
    endTime: "202402",
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

<div class="ye-picker-month-range" style="width: {width}; min-width: {minWidth}">
  <YeDatePicker
    {value}
    width="100%"
    clearable={false}
    {size}
    placeholder="请选择"
    selectMode="monthrange"
    valueFormat="YYYYMM"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-month-range {
    position: relative;
  }
</style>
