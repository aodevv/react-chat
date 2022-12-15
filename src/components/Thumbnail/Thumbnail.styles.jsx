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
  /* background-color: var(--color-primary-light); */
  position: relative;
  ${({ isBig }) => isBig && `border: 3px solid white;`}

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
  ${({ isGroup }) =>
    isGroup
      ? `background-color: #C7BFF3;
      .group-letter{
        color: #776AEF;
        font-size: 1.5rem;
        position: absolute;
        top: 48%;
        right: 50%;
        transform: translate(50%,-50%);
      }

  `
      : null}

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

  ${({ inactive }) =>
    inactive &&
    `
    opacity: 0;
  `}
`;

export const ThumbnailButton = styled.div`
  position: absolute;
  width: 33px;
  height: 33px;
  border-radius: 33px;
  background-color: #e6ebf5;
  border: 1px solid transparent;
  border-color: #e6ebf5;
  bottom: -2px;
  right: -2px;
  color: #212529;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 2px 4px rgba(34, 62, 80, 0.212);
  }
`;
