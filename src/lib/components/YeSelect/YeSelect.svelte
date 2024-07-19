<svelte:options customElement="{{tag: 'ye-select', shadow: 'none'}}"></svelte:options>

<script>
  import { BeOption, BeSelect } from '@/lib/beui/index.js';
  import { createEventDispatcher } from 'svelte';
  import { defaultSize } from '@/lib/components/yeConfig.js';
  // import { BeSelectV2, BeOptionV2 } from '@/lib/beui/be-select-v2/index.js';

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
  <BeSelect
    size={size}
    clearable="{false}"
    maxHeight="200px"
    bind:value={value}
    on:change>
    {#each dicData as item, index}
      <BeOption label={item.label} value={item.value}/>
    {/each}
  </BeSelect>
</div>


<style lang="scss">
  .ye-select {
    position: relative;
  }
</style>
