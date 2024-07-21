import { MayBeUiFormItem } from "@/library/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 按钮。
 */
export default {
  title: "maybe/MayBeUiFormItem",
  component: MayBeUiFormItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
    type: {
      control: { type: "radio" },
      options: [
        "select",
        "cascader",
        "picker-day",
        "picker-month",
        "picker-year",
        "picker-day-range",
        "picker-month-range",
        "picker-year-range",
        "radio-button",
      ],
    },
  },
};

export const Basic = {
  args: {
    type: "select",
    value: "1",
    size: "small",
    width: "200px",
    componentProps: {
      dicData: [
        { label: "选项一", value: "1" },
        { label: "选项二", value: "2" },
        { label: "选项三", value: "3" },
      ],
    },
  },
};