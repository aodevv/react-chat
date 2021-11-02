import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIds } from "../../redux/leftMenu/LeftMenu.selectors";

import { toggleActive } from "../../redux/leftMenu/LeftMenu.actions";

import { LeftMenuContainer, IconsContainer } from "./LeftMenu.styles";

import LeftMenuIcon from "../LeftMenuIcon/LeftMenuIcon";

const LeftMenu = ({ ids }) => {
  return (
    <LeftMenuContainer>
      <IconsContainer>
        <LeftMenuIcon
          onClick={() => toggleActive([1, 0, 0, 0])}
          isActive={!!ids.leftMenu[0]}
          icon="ri-user-2-line"
        />
        <LeftMenuIcon
          onClick={() => toggleActive([0, 1, 0, 0])}
          isActive={!!ids.leftMenu[1]}
          icon="ri-message-3-line"
        />
        <LeftMenuIcon
          onClick={() => toggleActive([0, 0, 1, 0])}
          isActive={!!ids.leftMenu[2]}
          icon="ri-group-line"
        />
        <LeftMenuIcon
          onClick={() => toggleActive([0, 0, 0, 1])}
          isActive={!!ids.leftMenu[3]}
          icon="ri-settings-2-line"
        />
      </IconsContainer>
    </LeftMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  ids: selectIds,
});

const mapDispatchToProps = (dispatch) => ({
  toggleActive: (ids) => dispatch(toggleActive(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
