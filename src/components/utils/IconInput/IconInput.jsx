import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: left;
  label {
    margin-bottom: 0.8rem;
    color: var(--bs-body-color);
    display: inline-block;
    font-size: 1.5rem;
  }
`;

const InnerInput = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-bottom: 1.6rem;

  span {
    background-color: var(--bs-gray-200);
    color: var(--bs-text-muted);
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.7rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    border: 1px solid #e6ebf5;
  }

  input {
    flex: 1 1 auto;
    border: 1px solid #e6ebf5;
    padding: 1.2rem 1.6rem;
    border-radius: 0.7rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
    color: var(--bs-body-color);
    outline: none;
  }
`;

const IconInput = ({ value, setValue, name, type, icon, className }) => {
  return (
    <Container className={className}>
      <label htmlFor={name}>{name}</label>
      <InnerInput>
        <span>
          <i className={icon} />
        </span>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={name}
        />
      </InnerInput>
    </Container>
  );
};

export default IconInput;
