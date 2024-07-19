<svelte:options customElement={{ tag: "ye-picker-year", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { BeDatePicker } from "@/lib/ui/beui/index.js";
  import {
    decodeDatePropValue,
    encodeDatePropValue,
    styleObjectToString,
  } from "@/lib/ui/yeui/utils/index.js";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";

  const defaultValue = "2024";

  export let value = defaultValue;
  export let width = "200px";
  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;

  const dispatch = createEventDispatcher();

  function onChange(e) {
    let val = decodeDatePropValue(e.detail);
    dispatch("change", val);
  }

  let innerValue = "";

  $: {
    if (value) {
      innerValue = encodeDatePropValue(value);
    } else {
      innerValue = "";
    }
  }
</script>

<div class="ye-picker-year" style="width: {width}">
  <BeDatePicker
    value={innerValue}
    clearable={false}
    {size}
    placeholder="请选择"
    selectMode="year"
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-picker-year {
    position: relative;
  }
</style>
