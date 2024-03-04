import { FC } from "react";
import { Link } from "./styled";
import { ILinkWrapperProps } from "./interfaces";

const LinkWrapper: FC<ILinkWrapperProps> = ({ children }) => {
    return (
        <Link>{children}</Link>
    )
}

export default LinkWrapper;