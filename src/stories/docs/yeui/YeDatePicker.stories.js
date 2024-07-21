import { YeDatePicker } from "@/library/index.js";
import { createArgTypes } from "@/stories/docs/yeui/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/*
  日期选择器
 */
export default {
  title: "yeui/YeDatePicker",
  component: YeDatePicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: createArgTypes({
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  }),
};

export const Basic = {};

export const ValueFormatYYYY = {
  args: {
    valueFormat: 'YYYY'
  }
}

export const clearable = {
  args: {
    clearable: true
  }
}
