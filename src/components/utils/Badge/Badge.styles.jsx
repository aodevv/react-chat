import styled from "styled-components";

export const Badge = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: red;
  ${({ status }) => {
    switch (status) {
      case "online":
        return `background-color: green;`;
      default:
        return null;
    }
  }}
`;
