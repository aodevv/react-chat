import React from "react";

import { Form, FormContainer, SendButton } from "./SendForm.styles";
import { SearchInputStyled } from "../SearchInput/SearchInput.styles";

const SenfForm = () => {
  return (
    <FormContainer>
      <Form>
        <div className="input">
          <SearchInputStyled placeholder="Boba" />
        </div>
        <div className="btn">
          <SendButton>
            <i className="ri-send-plane-2-fill"></i>
          </SendButton>
        </div>
      </Form>
    </FormContainer>
  );
};

export default SenfForm;
