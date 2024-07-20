<svelte:options customElement={{ tag: "ye-picker-month", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import YeDatePicker from "@/lib/ui/yeui/YeDatePicker/YeDatePicker.svelte";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";

  /**
   * string
   * @type {string}
   */
  export let value = '202401';
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

<div class="ye-picker-month">
  <YeDatePicker
    value={value}
    clearable={false}
    {size}
    {width}
    placeholder="请选择"
    selectMode="month"
    valueFormat="YYYYMM"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-month {
    position: relative;
  }
</style>
