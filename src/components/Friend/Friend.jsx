import React from "react";

import { FriendLi, FriendLiThumbnail } from "./Friend.styles";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";

const Friend = ({ name, status, img }) => {
  return (
    <FriendLi>
      <FriendLiThumbnail>
        <Thumbnail
          img={img}
          isGroup={img === null ? true : false}
          isBig={false}
          name={name}
          status={status}
        />
      </FriendLiThumbnail>
      <HeadingSecendary text={name} />
    </FriendLi>
  );
};

export default Friend;
