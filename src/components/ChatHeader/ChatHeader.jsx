import React, { useState, useEffect, useRef } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { HeadingSecendary } from "../utils/Heading/Headings";
import { Badge } from "../utils/Badge/Badge.styles";
import {
  ChatHeaderContainer,
  ChatHeaderName,
  ChatHeaderControls,
} from "./ChatHeader.styles";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import PopupMenu from "../utils/PopupMenu/PopupMenu";

const ChatHeader = ({ img, status, name, inactive }) => {
  const menuRef = useRef();
  const btnRef = useRef();

  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !btnRef.current.contains(e.target)
        )
          setIsClose(true);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);
  return (
    <ChatHeaderContainer>
      <ChatHeaderName>
        <Thumbnail
          isBig={false}
          img={img}
          status={false}
          inactive={inactive}
          className="u-mr-s"
        />
        <HeadingSecendary text={name} isBig={true} className="u-mr-xs" />
        <Badge inactive={inactive} status={status} />
      </ChatHeaderName>
      <ChatHeaderControls inactive={inactive}>
        <div>
          <i className="ri-search-line" />
        </div>
        <div>
          <i className="ri-phone-line" />
        </div>
        <div>
          <i className="ri-vidicon-line" />
        </div>
        <div>
          <i className="ri-user-2-line" />
        </div>
        <div className="chat-options">
          <div
            ref={btnRef}
            onClick={() => {
              if (!inactive) setIsClose(!isClose);
            }}
          >
            <i className="ri-more-fill" />
          </div>
          <AnimatePresence>
            {!isClose && (
              <motion.div
                initial={{ opacity: 0, zIndex: 30 }}
                animate={{ opacity: 1, zIndex: 30 }}
                exit={{ opacity: 0, zIndex: 30 }}
                transition={{ duration: 0.4 }}
                ref={menuRef}
              >
                <PopupMenu className="chat-options__ul">
                  <li className="chat-options__el">
                    <span>Archive</span>
                    <i className="ri-archive-line" />
                  </li>
                  <li className="chat-options__el">
                    <span>Muted</span>
                    <i className="ri-volume-mute-line" />
                  </li>
                  <li className="chat-options__el">
                    <span>Delete</span>
                    <i className="ri-delete-bin-line" />
                  </li>
                </PopupMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ChatHeaderControls>
    </ChatHeaderContainer>
  );
};

export default ChatHeader;
