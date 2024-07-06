export const controlArgTypes = {
	size: {
		control: { type: 'radio' },
		options: ['small', 'medium', 'large']
	}
};

/**
 * @returns {{size: {options: string[], control: {type: string}}}}
 * @param argTypes
 */
export function createArgTypes(argTypes = {}) {
	return Object.assign(
		{},
		{
			size: {
				control: { type: 'radio' },
				options: ['small', 'medium', 'large']
			}
		},
		argTypes
	);
}
