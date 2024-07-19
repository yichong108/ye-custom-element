import { YePickerMonth } from '@/lib/index.js';
import { createArgTypes } from '@/stories/yeui/utils/index.js';
import { sizeOptions } from '@/lib/ui/yeui/yeConfig.js';

/**
 * 月选择器。
 */
export default {
	title: 'components/YePickerMonth',
	component: YePickerMonth,
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
