import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Profil from "../../components/Center/Profil/Profil";
import Chats from "../../components/Center/Chats/Chats";
import Groups from "../../components/Center/Groups/Groups";
import Settings from "../../components/Center/Settings/Settings";

import { selectIds } from "../../redux/leftMenu/LeftMenu.selectors";

import "./Center.scss";

const Center = ({ ids, layout }) => {
  const getComponent = (ids) => {
    switch (ids.leftMenu.indexOf(1)) {
      case 0:
        return <Profil />;
      case 1:
        return <Chats />;
      case 2:
        return <Groups />;
      case 3:
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="Center">
      <div className="Center__container">{getComponent(ids)}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  ids: selectIds,
});

export default connect(mapStateToProps)(Center);
