import { MayBeUiRadioButton } from "@/library/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 按钮。
 */
export default {
  title: "maybe/MayBeUiRadioButton",
  component: MayBeUiRadioButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  },
};

export const Basic = {
  args: {
    value: 'LJ',
    dicData: [
      {
        label: '累计',
        value: 'LJ'
      },
      {
        label: '单月',
        value: 'MONTH'
      }
    ]
  }
};