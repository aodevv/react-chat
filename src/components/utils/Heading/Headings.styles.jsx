import styled from "styled-components";

export const H2 = styled.h2`
  color: var(--color-grey-dark);
  font-size: 2.1rem;
  font-weight: 600;
`;

export const H2s = styled.h2`
  color: var(--color-grey-dark);
  font-size: 1.3rem;
  font-weight: 600;
  ${({ isBig }) => isBig && `font-size: 1.6rem;`}
`;
