import { YeInput } from "@/lib/index.js";
import { createArgTypes } from "@/stories/yeui/utils/index.js";
import { sizeOptions } from "@/lib/ui/yeui/yeConfig.js";

/**
 * 输入框。
 */
export default {
  title: "components/YeInput",
  component: YeInput,
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
