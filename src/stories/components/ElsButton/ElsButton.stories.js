import { ElsButton } from '@/lib/index.js';
import '../../../lib/theme/index.scss';
import { controlArgTypes, createArgTypes } from '@/stories/utils/index.js';

/**
 * 按钮。
 */
export default {
	title: 'components/ElsButton',
	component: ElsButton,
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
		style: {
			control: { type: 'text' }
		}
	})
};

export const Default = {};
