import styled from "styled-components";

export const ChatItemContainer = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  justify-content: space-between;
  transition: all 0.4s;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-light-2);
  }
  ${({ isActive }) =>
    isActive ? `background-color: var(--color-grey-light-2);` : null}
`;

export const ChatContent = styled.div`
  flex: 1;
  width: 19rem;

  p {
    font-size: 1.4rem;
    color: var(--color-grey-dark-2);
  }
`;

export const ChatRight = styled.div`
  position: relative;
  width: 3rem;
  height: 3.9rem;
  p {
    font-size: 1.4rem;
    color: var(--color-grey-dark-2);
    position: absolute;
    top: 0;
  }
`;
