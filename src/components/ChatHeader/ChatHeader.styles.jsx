import styled from "styled-components";

export const ChatHeaderContainer = styled.div`
  padding: 2.4rem;
  display: flex;
  border-bottom: 1px solid var(--color-white-2);
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

export const ChatHeaderName = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatHeaderControls = styled.div`
  display: flex;
  .chat-options {
    position: relative;

    &__ul {
      top: 110%;
    }

    &__el {
      span {
        margin-right: 3rem;
      }

      i {
        font-size: 1.5rem;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & > div {
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;

    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    i {
      color: var(--bs-gray-600);
      font-size: 2rem;
    }
  }

  ${({ inactive }) =>
    inactive &&
    `
    opacity: 0.4;

    & > div {
      cursor: default;
    }
  `}
`;
