<svelte:options customElement={{ tag: "ye-input", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { BeInput } from "@/lib/ui/beui/index.js";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";

  /**
   * 输入值
   * @type {string}
   */
  export let value = "";
  /**
   * 占位提示符
   * @type {string}
   */
  export let placeholder = "请输入";
  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;
  /**
   * 是否只读
   * @type {boolean}
   */
  export let readonly = false;
  /**
   * 是否禁用
   * @type {boolean}
   */
  export let disabled = false;
  /**
   * 是否显示清除按钮
   * @type {boolean}
   */
  export let clearable = false;

  /**
   * 宽度
   * @type {string}
   */
  export let width = "200px";

  let dispatch = createEventDispatcher();

  // 仅在输入框失去焦点或用户按下回车时触发
  function onChange() {
    /**
     * change
     */
    dispatch("change", value);
  }

  // 点击事件
  function click() {
    dispatch("click");
  }
</script>

<div style="width: {width}" class="ye-input">
  <BeInput
    {value}
    {placeholder}
    {size}
    {readonly}
    {disabled}
    {clearable}
    on:change={onChange}
  ></BeInput>
</div>

<style lang="scss">
</style>
