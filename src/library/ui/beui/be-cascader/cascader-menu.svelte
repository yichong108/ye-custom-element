<script>
  import BeRadio from "@/library/ui/beui/be-radio/BeRadio.svelte";
  import BeIcon from "../be-icon/BeIcon.svelte";
  import { createEventDispatcher } from "svelte";

  export let menu;
  export let value;
  export let store;
  export let expandTrigger;
  export let checkStrictly;
  export let selectValue;
  export let config;
  export let lazy = false;
  export let curLoadingId = null;

  const dispatch = createEventDispatcher();

  const hoverNodes = (item) => {
    if (expandTrigger == "click") return;
    if (
      expandTrigger == "hover" &&
      (!item[config.children] || !item[config.children].length)
    ) {
      return;
    } else {
      if (lazy) curLoadingId = item[config.value];
      store.publishHandle(item);
    }
  };
  const clickNodes = (item, type = "default") => {
    if (lazy && type === "default") curLoadingId = item[config.value];
    const params = {
      ...item,
      type,
    };
    store.publishHandle(params);
    dispatch('clickNode');
  };
</script>

<div class="be-cascader-menu">
  <div class="be-cascader-menu-scroller">
    <ul class="be-cascader-menu__list">
      {#each menu as item, index}
        <li
          class="be-cascader-node"
          tabindex="-1"
          class:in-active-path={value == item[config.value]}
          class:is-disabled={item.disabled}
        >
          {#if (!item.children || !item.children.length) && value == item[config.value] && !checkStrictly}
            <div class="be-cascader-node__prefix">
              <BeIcon name="check" color="#409eff" width="16" height="16" />
            </div>
          {/if}
          {#if checkStrictly}
            <BeRadio
              bind:checked={selectValue}
              disabled={item.disabled}
              label={item[config.value]}
              on:click={() => clickNodes(item, "radio")}
              on:keydown
            />
          {/if}
          <span
            role="button"
            tabindex="-1"
            class="be-cascader-node__label"
            on:keydown
            on:click={() => clickNodes(item)}
            on:mouseenter={() => hoverNodes(item)}>{item[config.label]}</span
          >
          {#if (lazy && item.hasChild) || (item.children && item.children.length)}
            {#if curLoadingId == item[config.value]}
              <div class="be-cascader-node__loading">
                <BeIcon name="loading" />
              </div>
            {:else}
              <BeIcon
                name="chevron-right"
                color={item.disabled
                ? "#c0c4cc"
                : value == item[config.value]
                  ? "#409eff"
                  : "#606266"}
                width="18"
                height="18"
              />
            {/if}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
