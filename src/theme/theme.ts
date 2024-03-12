import { fontWeights, sizes } from "./styles";

export const baseStyle = {
    fontWeights: {
        ...fontWeights
    },
    sizes: {
        ...sizes
    }
}

export const dark = {
    name: "dark",
    ...baseStyle,
    bgColor: "#15202b"
}

export const light = {
    name: "light",
    ...baseStyle,
    bgColor: "#FFFFFF"

}

export type ThemeType = typeof light;
