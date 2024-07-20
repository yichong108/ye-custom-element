<svelte:options
  customElement={{ tag: "ye-picker-month-range", shadow: "none" }}
/>

<script>
  import { createEventDispatcher } from "svelte";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";
  import YeDatePicker from "@/lib/ui/yeui/YeDatePicker/YeDatePicker.svelte";

  export let value = {
    beginTime: "202401",
    endTime: "202402",
  };
  export let width = "240px";

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

<div class="ye-picker-month-range">
  <YeDatePicker
    {value}
    {width}
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
