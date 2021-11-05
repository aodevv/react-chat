import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2.4rem;
  border-top: 1px solid var(--color-white-2);
  display: flex;
`;

export const Form = styled.form`
  display: inherit;
  width: 100%;
  align-items: flex-end;
  .input {
    flex: 1;
  }
  .btn {
    padding: 0 1.2rem;
  }
`;

export const SendButton = styled.button`
  padding: 1rem 1.6rem;
  position: relative;
  color: white;
  border: none;
  font-size: 1.6rem;
  border-radius: 0.7rem;
  background-color: var(--color-primary-light);
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
