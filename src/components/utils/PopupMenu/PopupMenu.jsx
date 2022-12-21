import React from "react";
import styled from "styled-components";

const PopupMenuContainer = styled.div`
  &.close {
    display: none;
  }
  position: absolute;
  right: 0;
  padding: 0.8rem 0;
  font-size: 1.5rem;
  color: black;
  border-radius: 0.5rem;
  border: 1px solid var(--bs-border-color);
  z-index: 30;
  background-color: white;
  box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);

  .divider {
    border: 1px solid var(--bs-border-color);
    margin: 0.8rem 0;
  }
  ul {
    white-space: nowrap;

    list-style: none;

    li {
      cursor: pointer;
      padding: 0.8rem 2.4rem;

      &:hover {
        background-color: var(--bs-dropdown-link-hover-bg);
      }
    }
  }
`;

const PopupMenu = ({ elRef, children, className }) => {
  return (
    <PopupMenuContainer ref={elRef} className={`${className}`}>
      <ul>{children}</ul>
    </PopupMenuContainer>
  );
};

export default PopupMenu;
