import React from "react";
import { ChatItemContainer, ChatContent, ChatRight } from "./ChatItem.styles";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";
import { Badge } from "../utils/Badge/Badge.styles";

import { connect } from "react-redux";
import { showChats } from "../../redux/leftMenu/LeftMenu.actions";

const ChatItem = ({
  name,
  lastMessage,
  img,
  status,
  time,
  unread,
  active,
  index,
  id,
  setActiveChats,
  setActiveConversation,
  getMessages,
  actives,
  messages,
  showChats,
}) => {
  const newActives = actives.map((active, idx) => (index === idx ? 1 : 0));
  const setActive = () => {
    showChats();
    if (JSON.stringify(actives) === JSON.stringify(newActives)) {
      return;
    }
    setActiveChats(newActives);
    setActiveConversation(id);
    console.log(index);
    getMessages(messages[index]);
  };
  return (
    <li>
      <ChatItemContainer isActive={active} onClick={setActive}>
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

const mapDispatchToPros = (dispatch) => ({
  showChats: () => dispatch(showChats()),
});

export default connect(null, mapDispatchToPros)(ChatItem);
