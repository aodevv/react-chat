import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  background-color: #e6ebf5;
  border: 1px solid transparent;
  border-color: #e6ebf5;
  color: #212529;
  font-size: 1.3rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  width: 62px;
  height: 30px;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 2px 4px rgba(34, 62, 80, 0.212);
  }
`;

const IconButton = ({ icon, text }) => {
  return (
    <Button>
      <i className={icon}></i>
      {text}
    </Button>
  );
};

export default IconButton;
