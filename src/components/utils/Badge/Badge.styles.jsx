import styled from "styled-components";

export const Badge = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: red;
  ${({ status }) => {
    switch (status) {
      case "online":
        return `background-color: var(--color-online);`;
      default:
        return null;
    }
  }}

  ${({ isRound }) =>
    isRound
      ? `
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--color-red-pink-light);
        color: var(--color-red-pink);
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      `
      : null}

${({ centered }) =>
    centered
      ? `
        
        top: 50%;
        transform: translate(-50%, -50%);
      `
      : null}
`;
