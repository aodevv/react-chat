import React from "react";

import { connect } from "react-redux";

import { toggleActive } from "../../redux/leftMenu/LeftMenu.actions";

import { LeftMenuContainer, IconsContainer } from "./LeftMenu.styles";

import LeftMenuIcon from "../LeftMenuIcon/LeftMenuIcon";

const LeftMenu = ({ toggleActive }) => {
  return (
    <LeftMenuContainer>
      <IconsContainer>
        <LeftMenuIcon
          id={0}
          toggleActive={toggleActive}
          icon="ri-user-2-line"
        />
        <LeftMenuIcon
          id={1}
          toggleActive={toggleActive}
          icon="ri-message-3-line"
        />
        <LeftMenuIcon id={2} toggleActive={toggleActive} icon="ri-group-line" />
        <LeftMenuIcon
          id={3}
          toggleActive={toggleActive}
          icon="ri-settings-2-line"
        />
      </IconsContainer>
    </LeftMenuContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleActive: (ids) => dispatch(toggleActive(ids)),
});

export default connect(null, mapDispatchToProps)(LeftMenu);
