import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    position: relative;
    width: 10%;
    height: 4.3rem;
    background-color: var(--color-grey-light-2);
    border-radius: 5px 0px 0px 5px;

    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      font-size: 1.8rem;
    }
  }
`;

export const SearchInputStyled = styled.input`
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  width: 100%;
  background-color: var(--color-grey-light-2);
  border: 1px solid var(--color-grey-light-2);
  border-radius: 0 5px 5px 0;
  line-height: 1.5;

  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: var(--color-grey-dark-2);
    font-family: "Public Sans", sans-serif;
  }
`;
