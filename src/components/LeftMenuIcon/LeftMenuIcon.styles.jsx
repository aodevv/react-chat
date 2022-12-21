import styled, { css } from "styled-components";

const activeStyles = css`
  color: red;
  //color: #7269ef;
  background-color: #f7f7ff;
  border-radius: 5px;

  a {
    color: #7269ef;
  }
`;

const getActive = (props) => {
  return props.isActive ? activeStyles : null;
};

export const IconContainer = styled.li`
  list-style: none;
  font-size: 2.4rem;
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--color-grey-light-1);
    i {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  ${getActive}

  @media (max-width: 1000px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  @media (max-width: 500px) {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
