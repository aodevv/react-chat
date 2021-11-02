import React from "react";

import Thumbnail from "../Thumbnail/Thumbnail";
import { LeftBottomContainer } from "./LeftBottom.styles";

import Oussama from "../../assets/oussama.jpg";

const LeftBottom = () => {
  return (
    <LeftBottomContainer>
      <Thumbnail isBig={false} img={Oussama} />
    </LeftBottomContainer>
  );
};

export default LeftBottom;
