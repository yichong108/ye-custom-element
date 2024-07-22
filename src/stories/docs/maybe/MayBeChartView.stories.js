import { MayBeChartView } from "@/library/index.js";
import MayBeChartViewStory1 from "@/stories/docs/maybe/MayBeChartViewStory1.svelte";

export default {
  title: "maybe/MayBeChartView",
  component: MayBeChartView,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Basic = {
  args: {
    comTitle: '自定义标题',
    formData: {
      city: '广州市'
    },
    formOptions: [
      {
        name: 'city',
        type: 'select',
        style: {
          width: '100px'
        },
        dicData: [
          {
            label: '广州',
            value: '广州市'
          },
          {
            label: '惠州',
            value: '惠州市'
          },
          {
            label: '珠海',
            value: '珠海市'
          }
        ]
      }
    ],
    echartsOption: {
      grid: {
        top: 20,
        bottom: 30,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    },
    width: '500px',
    height: '400px'
  },
};

export const Reactive = {
  render: () => ({
    Component: MayBeChartViewStory1,
    props: {
    },
  }),
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
}