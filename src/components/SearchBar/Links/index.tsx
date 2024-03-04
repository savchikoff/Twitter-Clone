import { Link } from "react-router-dom";
import { LinksWrapper } from "./styled";
import { FooterLinks } from "@/constants/FooterLinks";
import { FC } from "react";

const Links: FC = () => {
    return (
        <LinksWrapper>
            {FooterLinks.map(({ name, link }, index) => {
                if (index < 6) {
                    return (
                        <Link key={index} to={link}>
                            {name}
                        </Link>
                    )
                }
            })}
            <Link to="/">More</Link>
        </LinksWrapper>
    )
}

export default Links;