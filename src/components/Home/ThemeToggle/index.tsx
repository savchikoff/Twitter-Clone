import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

import { dark, light } from '@/theme/theme';
import { writeToCache } from '@/utils/cache';

import { Input, Label, Switch } from './styled';

const ThemeToggle: FC = () => {
	const { themeType, setThemeType } = useContext(ThemeContext) as DefaultTheme;

	const toggleTheme = () => {
		const newTheme = themeType.name === 'dark' ? light : dark;
		setThemeType(newTheme);
		writeToCache('theme', newTheme.name);
	};

	const isLightTheme = themeType.name === 'light';

	return (
		<Label>
			<Input
				data-cy="theme-toggle"
				checked={isLightTheme}
				type="checkbox"
				onChange={toggleTheme}
			/>
			<Switch />
		</Label>
	);
};

export default ThemeToggle;
