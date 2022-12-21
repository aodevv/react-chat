import styled from "styled-components";

export const FriendLi = styled.li`
  list-style: none;
  min-width: 7rem;
  background-color: var(--color-grey-light-2);
  border-radius: 0.8rem;
  flex: none;
  padding: 0.8rem;
  text-align: center;
  position: relative;
  margin: 1.6rem 0.8rem 0 0;
  h2 {
    margin: 1.6rem 0 0.4rem 0;
  }
`;

export const FriendLiThumbnail = styled.div`
  position: absolute;
  top: -1.5rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
`;
