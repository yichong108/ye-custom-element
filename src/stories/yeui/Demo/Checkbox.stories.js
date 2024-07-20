import Checkbox from './Checkbox.svelte';
import Checkbox2 from './Checkbox2.svelte';

export default {
  title: "test/Checkbox",
  Component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    Component: Checkbox,
    props: {
      label: 'Hello',
    },
  }),
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        code: 'd'
      }
    },
  },
};

export const Default2 = {
  render: () => ({
    Component: Checkbox2,
    props: {
      label: 'Hello',
    },
  }),
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        code: 'd'
      }
    },
  },
};