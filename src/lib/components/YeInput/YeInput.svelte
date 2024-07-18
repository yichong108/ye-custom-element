<svelte:options customElement="{{tag: 'ye-input', shadow: 'none'}}"></svelte:options>
<script>
  import {createEventDispatcher} from 'svelte';
  import {BeInput} from '@/lib/beui/index.js';

  /**
   * 输入值
   * @type {string}
   */
  export let value = '';
  /**
   * 占位提示符
   * @type {string}
   */
  export let placeholder = '请输入';
  /**
   * 尺寸
   * @type {string}
   */
  export let size = 'medium';
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
  export let width = '200px';

  let dispatch = createEventDispatcher();

  // 在input失去焦点时触发
  function blur(event) {
    dispatch('blur', event);
  }

  // 在input获得焦点时触发
  function focus(event) {
    dispatch('focus', event);
  }

  // 仅在输入框失去焦点或用户按下回车时触发
  function onChange() {
    /**
     * change
     */
    dispatch('change', value);
  }

  // 点击事件
  function click() {
    dispatch('click');
  }
</script>

<div style='width: {width}' class="ye-input">
  <BeInput value="{value}" placeholder="{placeholder}" size="{size}" readonly="{readonly}"
           disabled="{disabled}" on:change={onChange}></BeInput>
</div>

<style lang="scss">
</style>
