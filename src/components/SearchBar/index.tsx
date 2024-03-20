import { FC, useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import Search from "@/ui/Search";

import Links from "./Links";
import SearchBurger from "./SearchBurger";
import { SearchBarContainer } from "./styled";
import UserRecommendations from "./UserRecommendations";

const SearchBar: FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchValue = useDebounce(searchQuery, 200);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isSmallScreen = width < 1440;

    if (!isSmallScreen) {
        return (
            <SearchBarContainer>
                <Search searchValue={searchQuery} setSearchValue={setSearchQuery} />
                <UserRecommendations searchValue={debouncedSearchValue} />
                <Links />
            </SearchBarContainer>
        );
    }

    return (
        <SearchBurger>
            <SearchBarContainer>
                <Search searchValue={searchQuery} setSearchValue={setSearchQuery} />
                <UserRecommendations searchValue={debouncedSearchValue} />
                <Links />
            </SearchBarContainer>
        </SearchBurger>
    )
}

export default SearchBar;