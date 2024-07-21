import { YeSelect } from "@/lib/index.js";
import { createArgTypes } from "@/stories/docs/yeui/utils/index.js";
import { sizeOptions } from "@/lib/ui/yeui/yeConfig.js";

/**
 * 下拉框选择器。
 */
export default {
  title: "yeui/YeSelect",
  component: YeSelect,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: createArgTypes({
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  }),
};

export const basic = {};

export const Default = {
  args: {
    value: "1",
    dicData: [
      { label: "选项一", value: "1" },
      { label: "选项二", value: "2" },
      { label: "选项三", value: "3" },
    ],
  },
};

export const scroll = {
  args: {
    dicData: new Array(100).fill().map((el, index) => {
      return {
        label: `选项${index+1}`,
        value: index+1,
      }
    })
  }
}
