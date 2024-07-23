<!-- Parent.svelte -->
<script>
      import {MayBeChartView, YePickerDayRange, defineCustomElement, YeSelect} from "@/library/index.js";

      // defineCustomElement('aa-b', MayBeChartView);

      let dicData = [
        { label: "选项一", value: "1" },
        { label: "选项二", value: "2" },
        { label: "选项三", value: "3" },
      ]
      let value = '1';

      function onClick() {
        value = '2'
      }

      function onChange(e) {
        console.log('e', e);
      }
</script>

<!--<MayBeChartView></MayBeChartView>-->
<!--<may-be-chart-view></may-be-chart-view>-->
<YePickerDayRange></YePickerDayRange>
<YeSelect value="{value}" dicData="{dicData}" on:change={onChange}></YeSelect>
<button on:click={onClick}>click</button>
