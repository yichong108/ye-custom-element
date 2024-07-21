<svelte:options customElement={{ tag: "sui-popover", shadow: "none" }} />

<script>
  import { createEventDispatcher, onMount } from "svelte";
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css";
  import "tippy.js/themes/light.css";

  export let visible = false;

  let referenceElement;
  let contentElement;
  let instance;

  const dispatcher = createEventDispatcher();

  $: {
    if (instance) {
      if (visible) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  }

  onMount(() => {
    instance = tippy(referenceElement.firstElementChild, {
      content: contentElement.firstElementChild, // 替换为你的实际内容
      appendTo: () => document.body,
      interactive: true, // 允许用户交互（例如，将鼠标悬停到弹出框上时不关闭）
      trigger: "manual", // 触发方式，可以是 'click', 'hover', 'focus', 等
      placement: "bottom", // 弹出框位置
      allowHTML: true, // 允许在弹出框中使用 HTML
      arrow: false,
      theme: "light",
      onShow(instance) {
        const referenceWidth = instance.reference.getBoundingClientRect().width;
        instance.popper.style.width = `${referenceWidth}px`;

        // 设置最大高度和溢出滚动条
        // instance.popper.style.maxHeight = '150px';
        // instance.popper.style.overflowY = 'auto';

        dispatcher("onShow");
      },
      onHide(instance) {
        dispatcher("onHide");
        // 在弹框隐藏时执行的操作
      },
    });
  });

  function makeTransparent(node) {
    node.style.all = "unset"; // 清除所有样式
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
