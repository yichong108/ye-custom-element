import { YeButton } from '@/lib/index.js';
import { controlArgTypes, createArgTypes } from '@/stories/utils/index.js';

/**
 * 按钮。
 */
export default {
	title: 'components/YeButton',
	component: YeButton,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes({
		type: {
			control: { type: 'radio' },
			options: ['primary', 'success', 'warning', 'danger', 'info']
		},
		label: {
			control: { type: 'text' }
		},
		width: {
			control: { type: 'text' }
		},
	})
};

export const Default = {};
