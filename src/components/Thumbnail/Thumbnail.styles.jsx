import styled, { css } from "styled-components";

const defaultSize = css`
  width: 3.5rem;
  height: 3.5rem;
  img {
    width: 3.5rem;
  }
`;

const largeSize = css`
  width: 8.6rem;
  height: 8.6rem;
  img {
    width: 8.6rem;
  }
`;
const getSize = (props) => {
  return props.isBig ? largeSize : defaultSize;
};

export const ThumbnailContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
  }

  ${getSize}
`;
