import { YeCascader } from "@/lib/index.js";
import { createArgTypes } from "@/stories/docs/yeui/utils/index.js";
import { sizeOptions } from "@/lib/ui/yeui/yeConfig.js";

/**
 * 级联选择器。
 */
export default {
  title: "yeui/YeCascader",
  component: YeCascader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: createArgTypes({
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  }),
};

export const Basic = {
  args: {
    value: ["1-1"],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    size: "small",
  },
};


export const showAllLevels = {
  args: {
    value: ["1-1",'1-1-1', '1-1-1-2'],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    showAllLevels: true,
  },
};

export const notShowAllLevels = {
  args: {
    value: ["1-1",'1-1-1', '1-1-1-2'],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    showAllLevels: false,
  },
};
