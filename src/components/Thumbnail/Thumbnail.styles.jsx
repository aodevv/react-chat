import styled, { css } from "styled-components";

const defaultSize = css`
  width: 3.5rem;
  height: 3.5rem;
`;

const largeSize = css`
  width: 8.6rem;
  height: 8.6rem;
`;

const getSize = (props) => {
  return props.isBig ? largeSize : defaultSize;
};

export const ImgContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: var(--color-primary-light);
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    object-fit: cover;
  }

  ${getSize}
`;

export const ThumbnailContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  ${({ isBig }) => (isBig ? `width: 8.6rem; height: 8.6rem;` : null)}
  border-radius: 50%;
  position: relative;
  background-color: var(--color-primary-light);
  position: relative;

  span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    bottom: 0;
    right: 0;
    z-index: 3;
    border: 2px solid white;
  }
`;
