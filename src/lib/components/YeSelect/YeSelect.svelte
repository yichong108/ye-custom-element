<svelte:options customElement="{{tag: 'ye-select', shadow: 'none'}}"></svelte:options>

<script>
  import {BeOption, BeSelect} from '@/lib/beui/index.js';
  import {createEventDispatcher} from 'svelte';
  import {styleObjectToString} from '@/lib/components/utils/index.js';

  export let value = '';
  /**
   * 下拉选项
   * @type {array}
   */
  export let dicData = [];
  export let width = '200px';
  export let size = 'medium';

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
