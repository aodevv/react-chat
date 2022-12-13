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

const GroupItem = ({ name, unread, active, index, id }) => {
  return (
    <li>
      <ChatItemContainer>
        <Thumbnail
          className="u-mr-s"
          isGroup={true}
          name={name}
          isBig={false}
        />
        <ChatContent>
          <HeadingSecendary text={`#${name}`} isBig={true} />
        </ChatContent>
        <ChatRight>
          {unread ? (
            <Badge isRound={true} centered={true}>
              <span>{unread}</span>
            </Badge>
          ) : null}
        </ChatRight>
      </ChatItemContainer>
    </li>
  );
};

export default GroupItem;
