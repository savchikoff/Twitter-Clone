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
    ...baseStyle
}

export const light = {
    name: "light",
    ...baseStyle
}