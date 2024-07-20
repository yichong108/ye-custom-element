<svelte:options
  customElement={{ tag: "ye-picker-year-range", shadow: "none" }}
/>

<script>
  import { createEventDispatcher } from "svelte";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";
  import YeDatePicker from "@/lib/ui/yeui/YeDatePicker/YeDatePicker.svelte";

  const minWidth = "200px";

  export let value = {
    beginTime: "2024",
    endTime: "2025",
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

<div style="width: {width}; min-width: {minWidth}" class="ye-picker-year-range">
  <YeDatePicker
    value={value}
    clearable={false}
    placeholder="请选择"
    {size}
    width="100%"
    selectMode="yearrange"
    valueFormat="YYYY"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-year-range {
    position: relative;
  }
</style>
