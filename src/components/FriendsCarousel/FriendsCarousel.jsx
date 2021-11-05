import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentFriends } from "../../redux/friendList/friendList.selectors";

import { FriendsList } from "./FriendsCarousel.styles";
import Friend from "../Friend/Friend";

const FriendsCarousel = ({ friends }) => {
  const Friends = friends;
  return (
    <FriendsList>
      {Friends.map((friend, index) => {
        return <Friend key={index} {...friend} />;
      })}
    </FriendsList>
  );
};

const mapStateToProps = createStructuredSelector({
  friends: selectCurrentFriends,
});

export default connect(mapStateToProps)(FriendsCarousel);
