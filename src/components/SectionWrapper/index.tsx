import { FC } from "react";
import { SectionContainer, SectionContent } from "./styled";
import { ISectionWrapperProps } from "./interfaces";

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