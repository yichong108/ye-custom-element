<svelte:options customElement={{ tag: "ye-picker-year", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";
  import YeDatePicker from "@/lib/ui/yeui/YeDatePicker/YeDatePicker.svelte";

  export let value = "2024";
  export let width = "200px";
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

<div class="ye-picker-year">
  <YeDatePicker
    {width}
    value={value}
    clearable={false}
    {size}
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
