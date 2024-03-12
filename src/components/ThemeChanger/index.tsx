import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";

import { dark, light } from "@/theme/theme";

import { ThemeChangerProps } from "./interfaces";
import { readFromCache, writeToCache } from "@/utils/cache";

const ThemeChanger: FC<ThemeChangerProps> = ({ children }) => {
    const [themeType, setThemeType] = useState(() => {
        const cachedTheme = readFromCache('theme');
        if (cachedTheme) {
            return cachedTheme === 'dark' ? dark : light;
        } else {
            writeToCache('theme', 'dark');
            return dark;
        }
    });
    return (
        <ThemeProvider theme={{ themeType, setThemeType }}>{children}</ThemeProvider>
    )
}

export default ThemeChanger;