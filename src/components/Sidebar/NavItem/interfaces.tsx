import { ComponentType } from "react";

export interface INavItemProps {
    Icon: ComponentType;
    label: string;
    to: string;
    isPrimary?: boolean;
    isActive?: boolean;
}