import styled, { css } from "styled-components";

const textLeft = css`
  margin-left: 1.6rem;

  .msg-content {
    color: white;
    background-color: var(--color-primary-light);
    border-radius: 0.8rem 0.8rem 0.8rem 0;

    &::after {
      left: 0;
      top: 99%;
      clip-path: polygon(100% 0, 0 0, 0 100%);
      background-color: var(--color-primary-light);
    }
  }
`;

const textRight = css`
  margin-left: 0;
  margin-right: 1.6rem;

  .msg-content {
    color: var(--color-grey-dark-3);
    background-color: var(--color-grey-light-3);
    border-radius: 0.8rem 0.8rem 0 0.8rem;

    &::after {
      left: 100%;
      transform: translateX(-100%);
      clip-path: polygon(100% 0, 0 0, 100% 100%);
      background-color: var(--color-grey-light-3);
    }
  }
`;

const getTextStyles = (props) => {
  return props.isRight ? textRight : textLeft;
};

export const MessageLi = styled.li`
  clear: both;
  transition: 0.4s;
  list-style: none;
  ${({ isRight }) => {
    return isRight
      ? `
      float: right;
        text-align: right;

        .thumbnail{
            order: 3;
        }
      `
      : null;
  }}
`;

export const MessageContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin-bottom: 2.4rem;
`;

export const MsgTextContainer = styled.div`
  .msg-content {
    padding: 1.2rem 2rem;
    position: relative;
    margin-bottom: 1rem;
    display: inline-block;

    p {
      font-size: 1.5rem;
    }

    &::after {
      position: absolute;
      content: "";
      width: 1rem;
      height: 1rem;
      bottom: -1rem;
    }
  }
  ${getTextStyles}
`;

const chatTimeLeft = css`
  text-align: right;
  color: hsla(0, 0%, 100%, 0.5);
`;

const chatTimeRight = css`
  text-align: left;
  color: var(--color-grey-dark-2);
`;

const getTimeStyles = (props) => {
  return props.isRight ? chatTimeRight : chatTimeLeft;
};

export const ChatTime = styled.p`
  font-size: 1.2rem !important;
  margin-top: 0.6rem;
  ${getTimeStyles}
`;

export const MsgSender = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-dark);
`;
