import { YeCascader } from '@/lib/index.js';
import { createArgTypes } from '@/stories/utils/index.js';

/**
 * 级联选择器。
 */
export default {
	title: 'components/YeCascader',
	component: YeCascader,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: createArgTypes()
};

export const Default = {
	args: {
		value: ['1-1'],
		dicData: [
			{
				value: '1-1',
				label: '1-1',
				children: [
					{
						value: '1-1-1',
						label: '1-1-1',
						children: [
							{
								value: '1-1-1-1',
								label: '1-1-1-1',
								children: [
									{
										value: '1-1-1-1-1',
										label: '1-1-1-1-1'
									}
								]
							},
							{
								value: '1-1-1-2',
								label: '1-1-1-2'
							}
						]
					}]
			},
			{
				value: '1-2',
				label: '1-2',
				children: []
			}
		],
		size: 'small'
	},
};
