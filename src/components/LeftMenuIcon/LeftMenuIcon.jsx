import React from "react";

import { IconContainer } from "./LeftMenuIcon.styles";

const LeftMenuIcon = ({ isActive, icon }) => {
  return (
    <IconContainer isActive={isActive}>
      <a href="#">
        <i className={icon}></i>
      </a>
    </IconContainer>
  );
};

export default LeftMenuIcon;
