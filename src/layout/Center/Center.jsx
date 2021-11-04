import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Profil from "../../components/Center/Profil/Profil";
import Chats from "../../components/Center/Chats/Chats";

import { selectIds } from "../../redux/leftMenu/LeftMenu.selectors";

import "./Center.scss";

const Center = ({ ids }) => {
  const getComponent = (ids) => {
    switch (ids.leftMenu.indexOf(1)) {
      case 0:
        return <Profil />;
      case 1:
        return <Chats />;
      default:
        return null;
    }
  };

  return <div className="Center">{getComponent(ids)}</div>;
};

const mapStateToProps = createStructuredSelector({
  ids: selectIds,
});

export default connect(mapStateToProps)(Center);
