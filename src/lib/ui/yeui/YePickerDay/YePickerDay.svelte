<svelte:options customElement={{ tag: "ye-picker-day", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import YeDatePicker from "@/lib/ui/yeui/YeDatePicker/YeDatePicker.svelte";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";

  /**
   * 值
   * @type {string}
   */
  export let value = '20240101';

  /**
   * 宽
   * @type {string}
   */
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

<div class="ye-picker-day">
  <YeDatePicker
    value={value}
    {size}
    {width}
    clearable={false}
    placeholder="请选择"
    selectMode="date"
    valueFormat="YYYYMMDD"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-day {
    position: relative;
  }
</style>
