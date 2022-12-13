import React from "react";
import {
  ThumbnailContainer,
  ImgContainer,
  ThumbnailButton,
} from "./Thumbnail.styles";
import { Badge } from "../utils/Badge/Badge.styles";

const Thumbnail = ({
  isBig,
  img,
  status,
  className,
  withButton,
  isGroup,
  name,
}) => {
  return (
    <ThumbnailContainer
      isBig={isBig}
      isGroup={isGroup}
      firstLetter={name}
      className={className}
    >
      {isGroup ? <p className="group-letter">{name.charAt(0)}</p> : null}
      {img ? (
        <ImgContainer isBig={isBig}>
          <img src={img} alt="thumbnail" />
        </ImgContainer>
      ) : null}
      {withButton && (
        <ThumbnailButton>
          <i className="ri-pencil-fill"></i>
        </ThumbnailButton>
      )}
      {status ? <Badge status={status} /> : null}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
