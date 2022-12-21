import styled from "styled-components";

export const StatusControl = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    display: inline-block;
  }

  .ri-arrow-drop-right-line {
    font-size: 2.5rem;
    color: var(--color-grey-dark-2);
    transform: rotate(90deg);
  }
`;
export const StatusControlContainer = styled.div`
  position: relative;
`;

export const DropdownContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 280px);
  color: transparent;

  & > div:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    height: 1.3rem;
    //width: 1rem;
    background-clip: padding-box;
    border-radius: 13px;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 5px;
  }

  &:hover {
    color: rgba(128, 128, 128, 0.726);
    transition: color 0.3s ease;
  }

  @media (max-width: 1000px) {
    padding-bottom: 7rem;
  }
`;

export const PrivacyControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &.border-bottom {
    border-bottom: 1px solid var(--bs-border-color) !important;
  }

  p {
    font-size: 1.3rem !important;
    color: var(--bs-gray-700) !important;
    margin-bottom: 0 !important;
  }

  .link {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const PrivacyBtn = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  min-width: 95px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  background-color: #e6ebf5;
  border-color: #e6ebf5;
  color: #212529;

  i {
    font-size: 1.8rem;
    transform: rotate(90deg);
  }

  &:hover {
    background-color: #eaeef7;
    border-color: #e9edf6;
  }
`;
