import React from "react";
import "./Left.scss";

import Logo from "../../components/Logo/Logo";
import LeftMenu from "../../components/LeftMenu/LeftMenu";

const Left = () => {
  return (
    <div className="Left">
      <Logo />
      <LeftMenu />
    </div>
  );
};

export default Left;
