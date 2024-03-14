import { ReactNode } from "react";

export interface IButtonProps {
    iconSrc?: string;
    type?: "button" | "submit" | "reset" | undefined;
    children: ReactNode | string;
    onClick?: () => void;
}