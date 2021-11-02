import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIds } from "../../redux/leftMenu/LeftMenu.selectors";

import { IconContainer } from "./LeftMenuIcon.styles";

const LeftMenuIcon = ({ id, toggleActive, icon, ids }) => {
  const newIds = [0, 0, 0, 0].map((el, index) => (index === id ? 1 : 0));
  const checkActive = () => {
    if (JSON.stringify(ids.leftMenu) === JSON.stringify(newIds)) return;
    toggleActive(newIds);
  };

  const isActive = !!ids.leftMenu[id];
  return (
    <IconContainer isActive={isActive} onClick={checkActive}>
      <a href="/#">
        <i className={icon}></i>
      </a>
    </IconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  ids: selectIds,
});

export default connect(mapStateToProps)(LeftMenuIcon);
