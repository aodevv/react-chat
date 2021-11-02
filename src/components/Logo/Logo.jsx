import React from "react";
import { LogoContainer, ImgContainer, Img } from "./Logo.styles";
import ChatLogo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <ImgContainer>
        <Img src={ChatLogo} alt="chat" />
      </ImgContainer>
    </LogoContainer>
  );
};

export default Logo;
