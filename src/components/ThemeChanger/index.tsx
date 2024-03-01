import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";

import { dark, light } from "@/theme/theme";

import { ThemeChangerProps } from "./interfaces";

const ThemeChanger: FC<ThemeChangerProps> = ({ children }) => {
    const [themeType, setThemeType] = useState(light);
    return (
        <ThemeProvider theme={themeType}>{children}</ThemeProvider>
    )
}

export default ThemeChanger;