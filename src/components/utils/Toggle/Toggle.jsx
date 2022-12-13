import React, { useState } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  width: 35px;
  height: 16px;
  padding: 2px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #b9b9bf;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 4px 2px #1b2c3f3d;
  }

  &.active {
    background-color: var(--color-primary-light);
  }
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: #b9b9bf;
  position: absolute;
  top: 2px;
  transition: transform 0.2s ease-out;

  &.active {
    transform: translateX(19px);
    background-color: white;
  }
`;

const Toggle = () => {
  const [active, setActive] = useState(true);
  return (
    <SwitchContainer
      className={`${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <Ball className={`${active ? "active" : ""}`} />
    </SwitchContainer>
  );
};

export default Toggle;
