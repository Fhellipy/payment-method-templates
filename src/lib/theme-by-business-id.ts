export type HSL = [number, number, number];

export interface ThemeVariables {
	background: HSL;
	foreground: HSL;
	primary: HSL;
	primaryForeground: HSL;
	secondary: HSL;
	secondaryForeground: HSL;
}

const THEME_BY_BUSINESS_ID: Record<string, ThemeVariables> = {
	primary: {
		background: [0, 0, 100],
		foreground: [222.2, 84, 4.9],
		primary: [221.2, 83.2, 53.3],
		primaryForeground: [210, 40, 98],
		secondary: [210, 40, 96.1],
		secondaryForeground: [222.2, 47.4, 11.2],
	},
	secondary: {
		background: [0, 0, 100],
		foreground: [0, 0, 3.9],
		primary: [0, 72.2, 50.6],
		primaryForeground: [0, 85.7, 97.3],
		secondary: [0, 0, 96.1],
		secondaryForeground: [0, 0, 9],
	},
	tertiary: {
		background: [0, 0, 100],
		foreground: [224, 71.4, 4.1],
		primary: [262.1, 83.3, 57.8],
		primaryForeground: [210, 20, 98],
		secondary: [220, 14.3, 95.9],
		secondaryForeground: [220.9, 39.3, 11],
	},
};

export function getThemeByBusinessID(theme = 'primary'): ThemeVariables {
	return THEME_BY_BUSINESS_ID[theme];
}
