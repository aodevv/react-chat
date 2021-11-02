import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Profil from "../../components/Center/Profil/Profil";

import { selectIds } from "../../redux/leftMenu/LeftMenu.selectors";

import "./Center.scss";

const Center = ({ ids }) => {
  if (ids.leftMenu[0]) {
    return (
      <div className="Center">
        <Profil />
      </div>
    );
  }
  return <div className="Center"></div>;
};

const mapStateToProps = createStructuredSelector({
  ids: selectIds,
});

export default connect(mapStateToProps)(Center);
