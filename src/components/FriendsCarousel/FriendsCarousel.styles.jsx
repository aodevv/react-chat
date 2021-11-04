import styled from "styled-components";

export const FriendsList = styled.ul`
  color: transparent;
  overflow-x: scroll;
  display: flex;
  transition: color 0.3s ease;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    height: 1.3rem;
    //width: 1rem;
    background-clip: padding-box;
    border-radius: 13px;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 4px;
  }

  &:hover {
    color: rgba(128, 128, 128, 0.726);
  }
`;
