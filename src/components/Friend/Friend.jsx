import React from "react";

import { FriendLi, FriendLiThumbnail } from "./Friend.styles";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";
import { Badge } from "../utils/Badge/Badge.styles";

const Friend = ({ name, status, img }) => {
  console.log(status);
  return (
    <FriendLi>
      <FriendLiThumbnail>
        <Thumbnail img={img} isBig={false} status={status} />
      </FriendLiThumbnail>
      <HeadingSecendary text={name} />
    </FriendLi>
  );
};

export default Friend;
