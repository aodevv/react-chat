import React from "react";

import { connect } from "react-redux";
import { setChats, setGroupChats } from "../../redux/chats/chats.actions";
import { Chats, groupChats } from "../../redux/chats/chats.data";

import { SearchInputContainer, SearchInputStyled } from "./SearchInput.styles";

const SearchInput = ({
  placeholder,
  className,
  setChats,
  setGroupChats,
  type,
}) => {
  const handleChange = (e) => {
    if (type === "1to1") {
      setChats(
        Chats.filter((chat) =>
          chat.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }

    if (type === "groups") {
      setGroupChats(
        groupChats.filter((group) =>
          group.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }

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
  setGroupChats: (groupChats) => dispatch(setGroupChats(groupChats)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
