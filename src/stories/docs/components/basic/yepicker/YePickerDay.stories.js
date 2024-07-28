import { YePickerDay } from "@/library/index.js";
import { createArgTypes } from "@/stories/docs/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 日选择器。
 */
export default {
  title: "components/basic/picker/YePickerDay",
  component: YePickerDay,
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
