import { YePickerMonthRange } from '@/lib/index.js';
import { createArgTypes } from '@/stories/utils/index.js';
import { sizeOptions } from '@/lib/components/yeConfig.js';

/**
 * 月范围选择器。
 */
export default {
	title: 'components/YePickerMonthRange',
	component: YePickerMonthRange,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes({
		size: {
			control: { type: 'radio' },
			options: sizeOptions
		},
	})
};

export const Default = {};
