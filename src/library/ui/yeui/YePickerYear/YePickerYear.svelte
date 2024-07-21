<svelte:options customElement={{ tag: "ye-picker-year", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { defaultSize } from "@/library/ui/yeui/yeConfig.js";
  import YeDatePicker from "@/library/ui/yeui/YeDatePicker/YeDatePicker.svelte";

  const minWidth = "80px";

  export let value = "2024";
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

<div style="width: {width}; min-width: {minWidth}" class="ye-picker-year">
  <YeDatePicker
    value={value}
    clearable={false}
    {size}
    width="100%"
    placeholder="请选择"
    selectMode="year"
    valueFormat="YYYY"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-year {
    position: relative;
  }
</style>
