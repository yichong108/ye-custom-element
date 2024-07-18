<svelte:options customElement="{{tag: 'ye-select-v2', shadow: 'none'}}"></svelte:options>

<script>
  import { BeOptionV2, BeSelectV2 } from '@/lib/beui/index.js';
  import { createEventDispatcher } from 'svelte';
  import { defaultSize } from '@/lib/components/yeConfig.js';

  export let value = '';
  /**
   * 下拉选项
   * @type {array}
   */
  export let dicData = [];
  export let width = '200px';
  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;

  const dispatch = createEventDispatcher();

  function onChange(e) {
    dispatch('change', e.detail);
  }
</script>

<div
        class="ye-select"
        style="width: {width}"
>
  <BeSelectV2
          size={size}
          clearable="{false}"
          maxHeight="200px"
          bind:value={value}
          on:change={onChange}>
    {#each dicData as item, index}
      <BeOptionV2 label={item.label} value={item.value}/>
    {/each}
  </BeSelectV2>
</div>


<style lang="scss">
  .ye-select {
    position: relative;
  }
</style>
