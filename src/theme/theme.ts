import { breakPoints, colors, fontWeights, sizes } from './styles';

export const baseStyle = {
	fontWeights: {
		...fontWeights,
	},
	sizes: {
		...sizes,
	},
	colors: {
		...colors,
	},
	breakPoints: {
		...breakPoints,
	},
};

export const dark = {
	name: 'dark',
	...baseStyle,
	bgColor: colors.darkBlue,
	textColor: colors.white,
};

export const light = {
	name: 'light',
	...baseStyle,
	bgColor: colors.white,
	textColor: colors.black,
};

export type ThemeType = typeof light;
