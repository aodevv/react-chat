import styled from "styled-components";

export const ProfilContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  height: 100%;
  width: 100%;
  padding: 2.5rem;
  padding-bottom: 1rem;
`;

export const ProfilInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilStatus = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
    display: inline-block;
  }
  p {
    display: inline-block;
  }
`;
