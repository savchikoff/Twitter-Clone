import { useState } from "react";

import Search from "@/ui/Search";

import Links from "./Links";
import RecommendedUsers from "./RecommendedUsers";
import { SearchBarContainer } from "./styled";

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