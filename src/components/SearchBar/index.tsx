import RecommendedUsers from "./RecommendedUsers";
import Search from "@/ui/Search";
import { SearchBarContainer } from "./styled";
import Links from "./Links";

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Search />
            <RecommendedUsers />
            <Links />
        </SearchBarContainer>
    )
}

export default SearchBar;