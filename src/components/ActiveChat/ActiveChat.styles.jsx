import styled from "styled-components";

export const RightCenter = styled.div`
  height: calc(100vh - 177px);
  max-height: 100%;
  position: relative;
  padding: 2.4rem;
  overflow-y: scroll;
  color: transparent;
  transition: color 0.4s;
  transition-delay: 0.5s;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    height: 1.3rem;
    //width: 1rem;
    background-clip: padding-box;
    border-radius: 13px;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 4px;
  }

  &:hover {
    color: rgba(128, 128, 128, 0.726);
    transition: color 0.3s ease;
  }
`;

export const MessagesUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
