import { YeSelect } from '@/lib/index.js';
import { createArgTypes } from '@/stories/utils/index.js';

/**
 * 输入框。
 */
export default {
	title: 'components/YeSelect',
	component: YeSelect,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes()
};

export const Default = {
	args: {
		value: '1',
		dicData: [
			{ label: '选项一', value: '1' },
			{ label: '选项二', value: '2' },
			{ label: '选项三', value: '3' },
		],
		size: 'small'
	},
};
