<script>
  import BaseLayout from "@/library/components/BaseLayout.svelte";
  import BaseChart from "@/library/components/BaseChart.svelte";
  import { MayBeUiFormItem } from "@/library/ui/mayBeUi/index.js";
  import { createEventDispatcher, onMount } from "svelte";
  import { yeLoading } from "../yeui/index.js";

  // 筛选项联动配置
  export let selectorLinkage = {};
  // 筛选项的值
  export let formData = {};
  // 筛选项配置
  export let formOptions = [];
  // echarts的option
  export let echartsOption = {};
  // 标题
  export let comTitle;
  // 宽
  export let width = "auto";
  // 高
  export let height = "auto";
  // TODO
  export let chartLoading = false;

  ///////////
  let realWidth = 0;
  let realHeight = 0;
  let element;

  console.log("formOptions", formOptions);

  let dispatch = createEventDispatcher();

  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        realWidth = entry.target.clientWidth;
        realHeight = entry.target.clientHeight;
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  });

  /**
   * 筛选项值变化的事件处理
   */
  function onItemChange(e, item) {
    formData[item.name] = e.detail;
    dispatch("searchFormChange", formData);
  }

  let filterShowMap = {};
  $: {
    for (let item of formOptions) {
      filterShowMap[item.name] = getComputedShow(item, formData);
    }
  }

  //判断是否配置筛选项之间联动
  function getComputedShow(item, formData) {
    //判断是否配置筛选项之间联动
    if (selectorLinkage) {
      let current = selectorLinkage[item.name];

      if (current?.isLink) {
        let currentField = current.linkInfo.filter((work) => work.field === item.name);
        if (currentField.length > 0) {
          return true;
        } else {
          let relation = current.linkInfo.filter((work) => work.bindField === item.name)[0];
          if (relation) {
            if (formData[relation.field] === relation.value) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
</script>

<div
  bind:this={element}
  style="{`width: ${width}; height: ${height}`}"
  class="may-be-chart-view">
  <BaseLayout comTitle="{comTitle}">
    <div class="view-content-box">
      <div class="search-form-box">
        {#each formOptions as item}
          <div class="{filterShowMap[item.name]?'': 'hidden'}">
            <MayBeUiFormItem
              type={item.type}
              width={item.style?.width}
              value={formData[item.name]}
              size={item.size? item.size : 'small'}
              componentProps={item}
              on:change={(e)=>onItemChange(e, item)}></MayBeUiFormItem>
          </div>
        {/each}
      </div>

      <div use:yeLoading="{chartLoading}" class="chart-box">
        <div style="height: 100%;width: 100%;">
          <BaseChart listenWidth="{realWidth}" listenHeight="{realHeight}" echartsOption={echartsOption}></BaseChart>
        </div>
      </div>

      <!--{#if !chartLoading}-->
      <!--  <div class="chart-box">-->
      <!--    <BaseChart echartsOption={echartsOption}></BaseChart>-->
      <!--  </div>-->
      <!--{:else}-->
      <!--  <div use:yeLoading="{true}" yeLoading-text="加载中"-->
      <!--       class="chart-box">-->
      <!--  </div>-->
      <!--{/if}-->

    </div>
  </BaseLayout>
</div>

<style lang="scss">

  @keyframes yeLoading-rotate {
    to {
      transform: rotate(1turn)
    }
  }

  @keyframes yeLoading-dash {
    0% {
      stroke-dasharray: 10, 200;
      stroke-dashoffset: 0
    }
    50% {
      stroke-dasharray: 120, 150
    }
    to {
      stroke-dasharray: 120, 150;
      stroke-dashoffset: -120px
    }
  }

  .may-be-chart-view {
    position: relative;
    height: 100%;

    .hidden {
      display: none;
    }

    .view-content-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .search-form-box {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }

      .chart-box {
        position: relative;
        left: 0;
        top: 0;
        flex: 1;
      }
    }
  }
</style>

