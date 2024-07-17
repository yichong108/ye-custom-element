import { YePickerMonth } from '@/lib/index.js';
import { controlArgTypes, createArgTypes } from '@/stories/utils/index.js';

/**
 * 按钮。
 */
export default {
	title: 'components/YePickerMonth',
	component: YePickerMonth,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes()
};

export const Default = {};
