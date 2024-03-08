import { FC } from "react";

import { ILinkWrapperProps } from "./interfaces";
import { Link } from "./styled";

const LinkWrapper: FC<ILinkWrapperProps> = ({ children }) => {
    return (
        <Link>{children}</Link>
    )
}

export default LinkWrapper;