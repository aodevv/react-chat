import React from "react";

import { connect } from "react-redux";
import { setChats } from "../../redux/chats/chats.actions";
import { Chats } from "../../redux/chats/chats.data";

import { SearchInputContainer, SearchInputStyled } from "./SearchInput.styles";

const SearchInput = ({ placeholder, className, setChats }) => {
  const handleChange = (e) => {
    setChats(
      Chats.filter((chat) =>
        chat.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    // setChats(chats.filter((chat) => chat.name === e.target.value));
  };

  return (
    <SearchInputContainer className={className} onChange={handleChange}>
      <span>
        <i className="ri-search-line"></i>
      </span>
      <SearchInputStyled placeholder={placeholder} type="text" />
    </SearchInputContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setChats: (chats) => dispatch(setChats(chats)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
