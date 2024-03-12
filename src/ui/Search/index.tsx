import { FC, useRef } from "react";
import search from "@/assets/search.svg";


import { SearchContainer, SearchIcon, SearchInput, SearchWrapper } from "./styled";

interface ISearchProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const Search: FC<ISearchProps> = ({ searchValue, setSearchValue }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = () => {
        inputRef.current?.focus();
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e?.target?.value);
    }

    return (
        <SearchContainer onClick={handleInputFocus}>
            <SearchWrapper>
                <SearchIcon src={search} />
                <SearchInput value={searchValue} onChange={handleInputChange} ref={inputRef} placeholder="Search" />
            </SearchWrapper>
        </SearchContainer>
    )
}

export default Search;