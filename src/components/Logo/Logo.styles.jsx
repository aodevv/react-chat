import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 40%;
`;
