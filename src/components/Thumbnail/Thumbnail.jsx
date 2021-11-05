import React from "react";
import { ThumbnailContainer, ImgContainer } from "./Thumbnail.styles";
import { Badge } from "../utils/Badge/Badge.styles";

const Thumbnail = ({ isBig, img, status, className }) => {
  return (
    <ThumbnailContainer isBig={isBig} className={className}>
      {img ? (
        <ImgContainer isBig={isBig}>
          <img src={img} alt="thumbnail" />
        </ImgContainer>
      ) : null}

      {status ? <Badge status={status} /> : null}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
