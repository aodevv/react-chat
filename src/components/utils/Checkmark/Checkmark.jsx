import React from "react";
import styled from "styled-components";

const CheckmarkBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: #f7f7ff;
  border: 1px solid var(--bs-gray-500);
  border-radius: 4px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-weight: bold;

  ${({ checked }) =>
    checked &&
    `background-color: var(--color-primary-light);
    border-color: var(--color-primary-light);
  `}
`;

const Checkmark = ({ checked, setChecked }) => {
  return (
    <CheckmarkBox checked={checked} onClick={() => setChecked(!checked)}>
      {checked && <i className="ri-check-fill" />}
    </CheckmarkBox>
  );
};

export default Checkmark;
