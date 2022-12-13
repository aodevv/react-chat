import { useEffect, useState } from "react";
import "./App.css";
import Left from "./layout/Left/Left";
import Center from "./layout/Center/Center";
import Right from "./layout/Right/Right";
import Login from "./layout/Login/Login";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectLoggedIn } from "./redux/leftMenu/LeftMenu.selectors";

import { getFriends } from "./redux/friendList/friendList.actions";
import {
  getChats,
  getAllMessages,
  getGroupChats,
} from "./redux/chats/chats.actions";

import { GlobalStyles } from "./GlobalStyles";

function App({
  getFriends,
  getChats,
  getAllMessages,
  getGroupChats,
  loggedIn,
}) {
  useEffect(() => {
    getFriends();
    getChats();
    getAllMessages();
    getGroupChats();
  });

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <GlobalStyles />
          <Left />
          <Center />
          <Right />
        </>
      ) : (
        <>
          <GlobalStyles />
          <Login />
        </>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  getFriends: () => dispatch(getFriends()),
  getChats: () => dispatch(getChats()),
  getGroupChats: () => dispatch(getGroupChats()),
  getAllMessages: () => dispatch(getAllMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
