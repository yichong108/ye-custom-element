<script>
  import { onMount } from 'svelte';
  import * as echarts from 'echarts';

  export let width = '100%';
  export let height = '100%';
  export let echartsOption = {};
  export let listenWidth;
  export let listenHeight;

  let baseChart;
  let chartInstance = null;

  const initChart = () => {
    if (baseChart) {
      chartInstance = echarts.init(baseChart);
      if (chartInstance) {
        chartInstance.setOption(echartsOption, true);
        chartInstance.resize();
      }
    }
  };

  onMount(() => {
    initChart();

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  });

  $: {
    if (chartInstance) {
      chartInstance.setOption(echartsOption, true);
      chartInstance.resize();
    }
  }

  $: {
    let listenSize = {
      width: listenWidth,
      height: listenHeight,
    }
    if (chartInstance) {
      chartInstance.setOption(echartsOption, true);
      chartInstance.resize();
    }
  }
</script>

<div bind:this={baseChart} class="base-chart" style="width: {width}; height: {height};"></div>

<style>
  .base-chart {
    width: 100%;
    height: 100%;
    min-height: 50px;
  }
</style>
