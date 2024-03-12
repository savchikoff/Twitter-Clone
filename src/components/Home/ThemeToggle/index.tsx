import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Label, Input, Switch } from './styled';
import { dark, light } from '@/theme/theme';
import { writeToCache } from '@/utils/cache';
import { DefaultTheme } from 'styled-components/dist/types';

const ThemeToggle = () => {
    const { themeType, setThemeType } = useContext(ThemeContext) as DefaultTheme;

    const toggleTheme = () => {
        const newTheme = themeType.name === 'dark' ? light : dark;
        setThemeType(newTheme);
        writeToCache('theme', newTheme.name);
    };

    const isLightTheme = themeType.name === 'light';

    return (
        <Label>
            <Input data-cy="toggle-checkbox" checked={isLightTheme} type="checkbox" onChange={toggleTheme} />
            <Switch />
        </Label>
    );
};

export default ThemeToggle;