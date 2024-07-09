<script>
  import YeInput from '../YeInput/YeInput.svelte';
  import {createEventDispatcher, onMount} from 'svelte';

  let dispatch = createEventDispatcher();
  // 下拉框选中的值
  export let value;
  export let name = '';
  export let clearable = false;
  export let placeholder = '请选择';
  export let dicData = [];

  let visible = false; // 下拉框
  $: if (visible) {
    dispatch('visibleChange', visible);
  }

  let isOpen = false;
  let popoverTargetId = ''; // 存储 popovertarget 的 ID

  const togglePopover = () => {
    isOpen = !isOpen;
    // const popoverTarget = document.getElementById('my-popover');
    // if (popoverTarget) {
    //   popoverTarget.togglePopover(); // 调用 togglePopover 方法显示/隐藏弹出框
    // }
    dispatch('visibleChange', isOpen); // 发送事件通知父组件显示状态变化
  };

  const selectOption = (option) => {
    console.log(`Selected: ${option}`);
    isOpen = false;
  };
</script>

<div class="ye-select">
<!--  <button-->
<!--       popovertarget="my-popover" class="popover-button ye-select__input" on:click={togglePopover}>-->
<!--    打开弹出框-->
<!--  </button>-->
<!--  <div class="popover-content ye-select__options" popover id="my-popover" hidden>-->
<!--    <div class="popover-item" on:click={() => selectOption('选项1')}>选项1</div>-->
<!--    <div class="popover-item" on:click={() => selectOption('选项2')}>选项2</div>-->
<!--    <div class="popover-item" on:click={() => selectOption('选项3')}>选项3</div>-->
<!--  </div>-->

  <button popovertarget="my-popover" class="popover-button" on:click={togglePopover}>打开弹出框</button>

  <div class="{`popover-content`}" popover id="my-popover">
    <div class="popover-item" on:click={() => selectOption('选项1')}>选项1</div>
    <div class="popover-item" on:click={() => selectOption('选项2')}>选项2</div>
    <div class="popover-item" on:click={() => selectOption('选项3')}>选项3</div>
  </div>
</div>

<style lang="scss">
  .ye-select {
    position: relative;
  }

  .popover-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .popover-content {
    position: absolute;
    top: 40px;
    left: 0;
    width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 8px;
  }
  .popover-content.active {
    display: block;
  }
  .popover-item {
    padding: 8px;
    cursor: pointer;
  }
  .popover-item:hover {
    background-color: #f0f0f0;
  }
</style>
