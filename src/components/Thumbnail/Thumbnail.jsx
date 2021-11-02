import React from "react";
import { ThumbnailContainer } from "./Thumbnail.styles";

const Thumbnail = ({ isBig, img }) => {
  console.log(img);
  return (
    <ThumbnailContainer isBig={isBig}>
      <img src={img} alt="thumbnail" />
    </ThumbnailContainer>
  );
};

export default Thumbnail;
