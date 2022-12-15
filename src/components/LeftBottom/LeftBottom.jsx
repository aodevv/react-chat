import React, { useState, useEffect, useRef } from "react";

import Thumbnail from "../Thumbnail/Thumbnail";
import { LeftBottomContainer } from "./LeftBottom.styles";
import PopupMenu from "../utils/PopupMenu/PopupMenu";

import { connect } from "react-redux";
import { toggleActive } from "../../redux/leftMenu/LeftMenu.actions";
import { logout } from "../../redux/auth/auth.actions";

import Oussama from "../../assets/oussama.jpg";

const LeftBottom = ({ toggleActive, logout }) => {
  const menuRef = useRef();
  const btnRef = useRef();

  const [isClose, setIsClose] = useState(true);

  const changeActiveCenter = (ids) => {
    toggleActive(ids);
    setIsClose(true);
  };

  useEffect(() => {
    let closeDropdown = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      )
        setIsClose(true);
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);
  return (
    <LeftBottomContainer>
      <div ref={btnRef} onClick={() => setIsClose(!isClose)}>
        <Thumbnail isBig={false} img={Oussama} className="menu-thumbnail" />
      </div>
      <PopupMenu
        elRef={menuRef}
        className="thumbnail-options__ul"
        closeState={isClose}
      >
        <li
          className="thumbnail-options__el"
          onClick={() => changeActiveCenter([1, 0, 0, 0])}
        >
          <span>Profile</span>
          <i className="ri-profile-line" />
        </li>
        <li
          className="thumbnail-options__el"
          onClick={() => changeActiveCenter([0, 0, 0, 1])}
        >
          <span>Setting</span>
          <i className="ri-settings-3-line" />
        </li>
        <div className="divider" />
        <li className="thumbnail-options__el" onClick={() => logout()}>
          <span>Log out</span>
          <i className="ri-logout-circle-r-line" />
        </li>
      </PopupMenu>
    </LeftBottomContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleActive: (ids) => dispatch(toggleActive(ids)),
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LeftBottom);
