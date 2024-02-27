import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeChangerProps } from "./interfaces";
import { dark, light } from "@/theme/theme";

const ThemeChanger: FC<ThemeChangerProps> = ({ children }) => {
    const [themeType, setThemeType] = useState(light);
    return (
        <ThemeProvider theme={themeType}>{children}</ThemeProvider>
    )
}

export default ThemeChanger;