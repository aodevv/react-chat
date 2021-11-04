import React from "react";
import {
  ChatItemContainer,
  ChatContent,
  ChatRight,
  UnreadCount,
} from "./ChatItem.styles";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";
import { Badge } from "../utils/Badge/Badge.styles";

const ChatItem = ({ name, lastMessage, img, status, time, unread, active }) => {
  return (
    <li>
      <ChatItemContainer isActive={active}>
        <Thumbnail className="u-mr-s" img={img} isBig={false} status={status} />
        <ChatContent>
          <HeadingSecendary className="u-mb-xs" text={name} isBig={true} />
          <p>{lastMessage}</p>
        </ChatContent>
        <ChatRight>
          <p className="u-font-xs">{time}</p>
          {unread ? (
            <Badge isRound={true}>
              <span>{unread}</span>
            </Badge>
          ) : null}
        </ChatRight>
      </ChatItemContainer>
    </li>
  );
};

export default ChatItem;
