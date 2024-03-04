import { FC, useRef } from "react";
import { SearchContainer, SearchIcon, SearchWrapper, SearchInput } from "./styled";
import search from "@assets/search.svg";

interface ISearchProps {
    setSearchValue?: (value: string) => void;
}

const Search: FC<ISearchProps> = ({ setSearchValue }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = () => {
        inputRef.current?.focus();
    }

    return (
        <SearchContainer onClick={handleInputFocus}>
            <SearchWrapper>
                <SearchIcon src={search} />
                <SearchInput ref={inputRef} placeholder="Search" />
            </SearchWrapper>
        </SearchContainer>
    )
}

export default Search;