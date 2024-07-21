import { YePickerMonthRange } from "@/library/index.js";
import { createArgTypes } from "@/stories/docs/yeui/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 月范围选择器。
 */
export default {
  title: "yeui/picker/YePickerMonthRange",
  component: YePickerMonthRange,
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
