<svelte:options customElement="{{tag: 'sui-popover', shadow: 'none'}}"></svelte:options>

<script>
  import {onMount} from 'svelte';
  import tippy from 'tippy.js';
  import 'tippy.js/dist/tippy.css';

  let referenceElement;
  let contentElement;

  onMount(() => {
    tippy(referenceElement.firstElementChild, {
      content: contentElement.firstElementChild, // 替换为你的实际内容
      appendTo: () => document.body,
      interactive: true, // 允许用户交互（例如，将鼠标悬停到弹出框上时不关闭）
      trigger: 'click', // 触发方式，可以是 'click', 'hover', 'focus', 等
      placement: 'bottom', // 弹出框位置
      allowHTML: true, // 允许在弹出框中使用 HTML
      arrow: true
    });
  });

  function makeTransparent(node) {
    node.style.all = 'unset'; // 清除所有样式
  }
</script>

<!-- 引用元素 -->
<div use:makeTransparent bind:this={contentElement}>
  <slot></slot>
</div>

<div bind:this={referenceElement} use:makeTransparent>
  <!-- 可以是任何触发弹出框的元素，比如按钮或者图标 -->
  <slot name="reference">Open Popover</slot>
</div>
