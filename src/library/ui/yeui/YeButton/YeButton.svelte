<svelte:options customElement={{ tag: "ye-button", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { BeButton } from "@/library/ui/beui/index.js";
  import { defaultSize } from "@/library/ui/yeui/yeConfig.js";

  export let width = "auto";

  /**
   * 是否关闭
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * 按钮文案
   * @type {string}
   */
  export let label = "按钮";

  /**
   * 类型
   * 'primary'|'success'|'warning'|'danger'|'info'
   * @type {string}
   */
  export let type = "primary";

  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;

  let dispatch = createEventDispatcher();

  function onClick(e) {
    // 点击事件
    dispatch("click", e.detail);
  }
</script>

<div class="ye-button" style="width: {width}">
  <BeButton style="width: 100%;" {disabled} {type} {size} on:click={onClick}>
    {label}
  </BeButton>
</div>

<style lang="scss">
  .ye-button {
    display: inline-block;
  }
</style>
