import styled from "styled-components";

export const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.35rem 0;

  @media (max-width: 1000px) {
    flex-direction: row;
    flex: 1;
  }
`;

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1.35rem 0;
  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;
