import styled from "styled-components";

export const LeftBottomContainer = styled.div`
  position: relative;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-thumbnail {
    cursor: pointer;
  }

  .thumbnail-options {
    &__ul {
      bottom: 90%;
      left: 10px;
      z-index: 700;
      min-width: 160px;
    }

    &__el {
      i {
        font-size: 1.5rem;
        color: var(--bs-gray-600);
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
