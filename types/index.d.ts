import 'vite/client';
import { ThemeType } from '@/theme/theme';

declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.js";

declare module 'styled-components' {
    export interface DefaultTheme {
        themeType: ThemeType;
        setThemeType: (theme: ThemeType) => void;
    }
}