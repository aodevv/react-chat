import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  width: 100%;
  background-color: white;
`;
const DropdownHeader = styled.div`
  color: var(--bs-gray-700);
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  justify-content: space-between;
  cursor: pointer;

  padding: 1rem 1.5rem;
  border-radius: 0.4rem 0.4rem 0 0;
  border: 1px solid var(--bs-border-color);

  ${({ active }) =>
    active &&
    `   border-bottom: 0;
      `}

  div {
    display: flex;
    align-items: center;

    font-weight: bold;
  }

  i:last-child {
    font-size: 2rem;
    transition: 0.2s;
    ${({ active }) =>
      active &&
      `
      transform: rotate(90deg);
  `}
  }
`;

const DropdownContent = styled.div`
  width: 100%;

  /* height: auto;
  clip: rect(auto, auto, 0, auto); */
  transition: clip 0.5s ease;
  border: 1px solid var(--bs-border-color);

  background-color: white;
  overflow: hidden;
  border-radius: 0 0 0.4rem 0.4rem;
  padding: 1rem 1.5rem;

  ${({ active }) =>
    active &&
    `   border-top: 0;
      `}

  p {
    font-size: 1.5rem;
    color: var(--bs-text-muted) !important;
    margin-bottom: 0.4rem;
  }

  h5 {
    font-size: 1.5rem;
    color: var(--bs-gray-700);
  }
`;

const Dropdown = ({ icon, name, className, children }) => {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };
  return (
    <DropdownContainer className={className}>
      <DropdownHeader active={active} onClick={toggleDropdown}>
        <div>
          {icon && <i className={`${icon} u-mr-s`}></i>}

          <p>{name}</p>
        </div>
        <i className="ri-arrow-drop-right-line"></i>
      </DropdownHeader>
      {active && <DropdownContent active={active}>{children}</DropdownContent>}
    </DropdownContainer>
  );
};

export default Dropdown;
