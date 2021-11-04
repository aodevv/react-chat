import styled from "styled-components";

export const ChatListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100vh - 274px);
  color: transparent;
  transition: color 0.3s ease;
  transition-delay: 0.6s;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    height: 1.3rem;
    //width: 1rem;
    background-clip: padding-box;
    border-radius: 13px;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 5px;
  }

  &:hover {
    color: rgba(128, 128, 128, 0.726);
    transition: color 0.3s ease;
  }
`;
