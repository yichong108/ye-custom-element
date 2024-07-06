import { ElsInput } from '@/lib/index.js';
import { createArgTypes } from '@/stories/utils/index.js';

/**
 * 输入框。
 */
export default {
	title: 'components/ElsInput',
	component: ElsInput,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes()
};

export const Default = {};
