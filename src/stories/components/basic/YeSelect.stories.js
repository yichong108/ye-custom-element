import { YeSelect } from "@/library/index.js";
import { createArgTypes } from "@/stories/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 下拉框选择器。
 */
export default {
  title: "components/basic/YeSelect",
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

export const basic = {
  args: {
    value: "1",
    dicData: [
      { label: "选项一", value: "1" },
      { label: "选项二", value: "2" },
      { label: "选项三", value: "3" },
    ],
  },
};

export const ellipsis = {
  args: {
    value: "1",
    width: "100px",
    dicData: [
      { label: "北京市", value: "1" },
      { label: "新疆乌鲁木齐市", value: "2" },
    ],
  },
};

export const scroll = {
  args: {
    dicData: new Array(100).fill().map((el, index) => {
      return {
        label: `选项${index + 1}`,
        value: index + 1,
      };
    }),
  },
};
