import React, { useState, useEffect, useRef } from "react";
import { HeadingPrimary, HeadingSecendary } from "../../utils/Heading/Headings";

import Thumbnail from "../../Thumbnail/Thumbnail";
import Dropdown from "../../Dropdown/Dropdown";
import PopupMenu from "../../utils/PopupMenu/PopupMenu";

import {
  ProfilContainer,
  ProfilContainerHeader,
  ProfilInfo,
  ProfilStatus,
  ProfilDescription,
} from "./Profil.styles";
import { Badge } from "../../utils/Badge/Badge.styles";

import ana from "../../../assets/oussama.jpg";

const Profil = () => {
  const [isClose, setIsClose] = useState(true);
  let menuRef = useRef();
  let dotsRef = useRef();

  useEffect(() => {
    let closeDropdown = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !dotsRef.current.contains(e.target)
      )
        setIsClose(true);
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);

  return (
    <ProfilContainer>
      <ProfilContainerHeader>
        <HeadingPrimary text="Profil" className="u-mb-s" />
        <div className="profile-actions">
          <div ref={dotsRef} onClick={() => setIsClose(!isClose)}>
            <i className="ri-more-2-fill"></i>
          </div>
          <PopupMenu elRef={menuRef} closeState={isClose}>
            <li>Edit</li>
            <li>Action</li>
            <div className="divider" />
            <li>Another action</li>
          </PopupMenu>
          {/* <div
            ref={menuRef}
            className={`profile-actions__dropdown ${isClose ? "close" : ""}`}
          >
            <ul>
              <li>Edit</li>
              <li>Action</li>
              <div className="divider" />
              <li>Another action</li>
            </ul>
          </div> */}
        </div>
      </ProfilContainerHeader>
      <ProfilInfo>
        <Thumbnail isBig={true} img={ana} withButton={false} />
        <HeadingSecendary
          isBig={true}
          text="Lalo Salamanca"
          className="u-mb-xs u-mt-s"
        />
        <ProfilStatus>
          <Badge status="online" />

          <p className="text-muted">Active</p>
        </ProfilStatus>
      </ProfilInfo>
      <ProfilDescription>
        If several languages coalesce, the grammar of the resulting language is
        more simple and regular than that of the individual.
      </ProfilDescription>
      <Dropdown icon="ri-user-2-line" className="u-mb-xs" name="About">
        <div>
          <p>Name</p>
          <h5>Aimarah Oussama</h5>
        </div>
        <div className="u-mt-s">
          <p>Email</p>
          <h5>aimarah.oussama@gmail.com</h5>
        </div>
        <div className="u-mt-s">
          <p>Location</p>
          <h5>Casablanca</h5>
        </div>
      </Dropdown>
    </ProfilContainer>
  );
};

export default Profil;
