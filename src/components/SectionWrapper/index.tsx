import { FC } from "react";

import { ISectionWrapperProps } from "./interfaces";
import { SectionContainer, SectionContent } from "./styled";

const SectionWrapper: FC<ISectionWrapperProps> = ({ children }) => {
    return (
        <SectionContainer>
            <SectionContent>
                {children}
            </SectionContent>
        </SectionContainer>
    )
}

export default SectionWrapper;