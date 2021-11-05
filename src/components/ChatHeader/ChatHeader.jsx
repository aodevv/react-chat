import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";
import { Badge } from "../utils/Badge/Badge.styles";
import { ChatHeaderContainer, ChatHeaderName } from "./ChatHeader.styles";

const ChatHeader = ({ img, status, name }) => {
  return (
    <ChatHeaderContainer>
      <ChatHeaderName>
        <Thumbnail isBig={false} img={img} status={false} className="u-mr-s" />
        <HeadingSecendary text={name} isBig={true} className="u-mr-xs" />
        <Badge status={status} />
      </ChatHeaderName>
    </ChatHeaderContainer>
  );
};

export default ChatHeader;
