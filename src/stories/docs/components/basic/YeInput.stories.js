import { YeInput } from "@/library/index.js";
import { createArgTypes } from "@/stories/docs/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 输入框。
 */
export default {
  title: "components/basic/YeInput",
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

export const basic = {};

export const readonly = {
  args: {
    value: "野火烧不尽",
    readonly: true,
  },
};

export const disabled = {
  args: {
    value: "大江东去",
    disabled: true,
  },
};

export const clearable = {
  args: {
    value: "输入值",
    clearable: true,
  },
};
