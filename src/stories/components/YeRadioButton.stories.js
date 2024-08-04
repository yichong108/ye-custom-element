import { YeRadioButton } from "@/library/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

export default {
  title: "components/YeRadioButton",
  component: YeRadioButton,
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
    value: '1',
    dicData: [
      {
        label: '选项一',
        value: '1'
      },
      {
        label: '选项二',
        value: '2'
      }
    ]
  }
};