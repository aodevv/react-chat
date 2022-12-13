import styled from "styled-components";

export const ProfilContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  height: 100%;
  width: 100%;
  padding: 2.5rem;
  padding-bottom: 1rem;
`;

export const ProfilContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .profile-actions {
    font-size: 1.8rem;
    color: var(--bs-text-muted);
    cursor: pointer;
    position: relative;

    &__dropdown {
      &.close {
        display: none;
      }
      position: absolute;
      right: 0;
      padding: 0.8rem 0;
      font-size: 1.5rem;
      color: black;
      border-radius: 0.5rem;
      border: 1px solid var(--bs-border-color);
      z-index: 3;
      background-color: white;
      box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);

      .divider {
        border: 1px solid var(--bs-border-color);
        margin: 0.8rem 0;
      }
      ul {
        white-space: nowrap;

        list-style: none;

        li {
          cursor: pointer;
          padding: 0.8rem 2.4rem;

          &:hover {
            background-color: var(--bs-dropdown-link-hover-bg);
          }
        }
      }
    }
  }
`;

export const ProfilInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.8rem;
`;

export const ProfilStatus = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
    display: inline-block;
  }
  p {
    display: inline-block;
  }
`;

export const ProfilDescription = styled.p`
  color: var(--color-grey-dark-2);
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2.4rem;
`;

export const ProfilDropdowns = styled.div``;
