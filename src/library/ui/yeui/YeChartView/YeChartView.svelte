<svelte:options customElement={{ tag: "ye-chart-view", shadow: "none" }} />

<script>
  import BaseLayout from "@/library/ui/yeui/YeChartView/BaseLayout.svelte";
  import BaseChart from "@/library/ui/yeui/YeChartView/BaseChart.svelte";
  import YeFormItem from "@/library/ui/yeui/YeFormItem/YeFormItem.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import { yeLoading } from "../index.js";

  /**
   * 筛选项联动配置
   * @type {object}
   */
  export let selectorLinkage = {};

  /**
   * 筛选项所有值
   * @type {object}
   */
  export let formData = {};

  /**
   * 筛选项配置
   * @type {array}
   */
  export let formOptions = [];

  /**
   * echarts的option
   * @type {object}
   */
  export let echartsOption = {};

  /**
   * 标题
   * @type {string}
   */
  export let comTitle;

  /**
   * 宽
   * @type {string}
   */
  export let width = "auto";

  /**
   * 高
   * @type {string}
   */
  export let height = "auto";

  /**
   * TODO
   * @type {boolean}
   */
  export let chartLoading = false;

  let realWidth = 0;
  let realHeight = 0;
  let element;

  let dispatch = createEventDispatcher();

  $: innerFormData = JSON.parse(JSON.stringify(formData));

  let filterShowMap = {};
  $: {
    for (let item of formOptions) {
      filterShowMap[item.name] = getComputedShow(item, innerFormData);
    }
  }

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
    innerFormData[item.name] = e.detail;
    dispatch("searchFormChange", innerFormData);
  }

  //判断是否配置筛选项之间联动
  function getComputedShow(item, innerFormData) {
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
            if (innerFormData[relation.field] === relation.value) {
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

  function getWidth(item) {
    if (item.style?.width) {
      return item.style?.width;
    }
    return undefined;
  }

  function getSize(item) {
    return item.size ? item.size : "small";
  }
</script>

<div
  bind:this={element}
  style="width: {width}; height: {height}"
  class="ye-chart-view">
  <BaseLayout comTitle="{comTitle}">
    <div class="view-content-box">
      <div class="search-form-box">
        {#each formOptions as item}
          <div class="{filterShowMap[item.name]?'': 'hidden'}">
            <YeFormItem
              type={item.type}
              width={getWidth(item)}
              value={innerFormData[item.name]}
              size={getSize(item)}
              componentProps={item}
              on:change={(e)=>onItemChange(e, item)}></YeFormItem>
          </div>
        {/each}
      </div>

      <div use:yeLoading="{chartLoading}" class="chart-box">
        <div style="height: 100%;width: 100%;">
          <BaseChart listenWidth="{realWidth}" listenHeight="{realHeight}" echartsOption={echartsOption}></BaseChart>
        </div>
      </div>

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

  .ye-chart-view {
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

