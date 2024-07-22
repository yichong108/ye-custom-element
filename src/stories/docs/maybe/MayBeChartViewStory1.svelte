<script>
  import { MayBeChartView } from "@/library/index.js";

  let comTitle = "自定义标题";
  let formData = {
    city: "广州市",
  };
  let formOptions = [
    {
      name: "city",
      type: "select",
      style: {
        width: "100px",
      },
      dicData: [
        {
          label: "广州",
          value: "广州市",
        },
        {
          label: "惠州",
          value: "惠州市",
        },
        {
          label: "珠海",
          value: "珠海市",
        },
      ],
    },
  ];
  let echartsOption = {
    grid: {
      top: 20,
      bottom: 30,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  let width = '500px';
  let height = '400px';
  let chartLoading = false;

  function onClick() {
    console.log("click");


    chartLoading = true;
    setTimeout(() => {
      chartLoading = false;

      formOptions[0].style.width = "200px";
      formOptions[0].dicData[0].label = "广州地区";
      formData.city = "惠州市";

      echartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
    }, 3000);
  }
</script>

<may-be-chart-view width="{width}" height="{height}" comTitle="{comTitle}"
                formData="{formData}"
                chartLoading="{chartLoading}"
                echartsOption="{echartsOption}" formOptions="{formOptions}"></may-be-chart-view>
<div style="margin-top: 20px;">
  <button on:click={onClick}>click to change</button>
</div>
