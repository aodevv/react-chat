import { useEffect } from "react";
import "./App.css";
import Left from "./layout/Left/Left";
import Center from "./layout/Center/Center";
import Right from "./layout/Right/Right";

import { connect } from "react-redux";
import { getFriends } from "./redux/friendList/friendList.actions";
import { getChats } from "./redux/chats/chats.actions";

import { GlobalStyles } from "./GlobalStyles";

function App({ getFriends, getChats }) {
  useEffect(() => {
    getFriends();
    getChats();
  }, []);
  return (
    <div className="App">
      <GlobalStyles />
      <Left />
      <Center />
      <Right />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getFriends: () => dispatch(getFriends()),
  getChats: () => dispatch(getChats()),
});

export default connect(null, mapDispatchToProps)(App);
