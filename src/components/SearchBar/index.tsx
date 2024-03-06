import RecommendedUsers from "./RecommendedUsers";
import Search from "@/ui/Search";
import { SearchBarContainer } from "./styled";
import Links from "./Links";
import { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchBarContainer>
            <Search searchValue={searchQuery} setSearchValue={setSearchQuery} />
            <RecommendedUsers searchValue={searchQuery} />
            <Links />
        </SearchBarContainer>
    )
}

export default SearchBar;