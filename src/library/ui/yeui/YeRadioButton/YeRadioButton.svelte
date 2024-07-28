<svelte:options customElement={{ tag: "ye-radio-button", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";

  export let dicData = [];
  export let value = "";
  export let size = "small";
  export let width = "100px";

  function handleChange(item) {
    value = item.value;
    dispatch("change", value);
  }

  const dispatch = createEventDispatcher();
</script>

<div style="width: {width}" class="ye-radio-button {size === 'small' ? 'size-small' : 'size-medium'}">
  {#each dicData as item, index}
    <div
      class="b-item {item.value === value ? 'active' : ''}"
      on:click={() => handleChange(item)}>{item.label}</div>
  {/each}
</div>

<style lang="scss">
  .ye-radio-button {
    display: flex;

    .b-item {
      white-space: nowrap;
      flex: 1;
      box-sizing: border-box;
      background: #fff;
      color: #666666;
      font-family: Microsoft YaHei;
      font-weight: 400;
      cursor: pointer;
      text-align: center;

      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;

      &.active {
        background: #3483eb;
        color: #ffffff !important;
        border-color: #3483eb !important;
      }

      &:hover {
        color: #3483eb;
      }
    }

    .b-item:first-child {
      border-radius: 4px 0 0 4px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      border-left: 1px solid #cccccc;
    }

    .b-item:last-child {
      border-radius: 0 4px 4px 0;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
    }
  }

  .size-small {
    .b-item {
      height: 32px;
      line-height: 32px;
      font-size: 14px;
    }
  }

  .size-medium {
    .b-item {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
    }
  }
</style>
