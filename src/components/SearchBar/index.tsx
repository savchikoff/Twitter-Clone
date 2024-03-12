import { useState } from "react";

import Search from "@/ui/Search";

import Links from "./Links";
import UserRecommendations from "./UserRecommendations";
import { SearchBarContainer } from "./styled";
import useDebounce from "@/hooks/useDebounce";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchValue = useDebounce(searchQuery, 200);

    return (
        <SearchBarContainer>
            <Search searchValue={searchQuery} setSearchValue={setSearchQuery} />
            <UserRecommendations searchValue={debouncedSearchValue} />
            <Links />
        </SearchBarContainer>
    )
}

export default SearchBar;