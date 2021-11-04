import React from "react";
import { SearchInputContainer, SearchInputStyled } from "./SearchInput.styles";

const SearchInput = ({ placeholder, className }) => {
  return (
    <SearchInputContainer className={className}>
      <span>
        <i className="ri-search-line"></i>
      </span>
      <SearchInputStyled placeholder={placeholder} type="text" />
    </SearchInputContainer>
  );
};

export default SearchInput;
