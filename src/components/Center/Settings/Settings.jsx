import React, { useState, useEffect, useRef } from "react";
import { HeadingPrimary, HeadingSecendary } from "../../utils/Heading/Headings";

import Thumbnail from "../../Thumbnail/Thumbnail";
import Dropdown from "../../Dropdown/Dropdown";
import PopupMenu from "../../utils/PopupMenu/PopupMenu";
import IconButton from "../../utils/Buttons/IconButton";
import Toggle from "../../utils/Toggle/Toggle";

import {
  ProfilContainer,
  ProfilContainerHeader,
  ProfilInfo,
} from "../Profil/Profil.styles";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import {
  StatusControl,
  StatusControlContainer,
  PrivacyBtn,
  PrivacyControl,
  DropdownContainer,
} from "./Settings.styles";
// import { Badge } from "../../utils/Badge/Badge.styles";

import ana from "../../../assets/oussama.jpg";

const Settings = () => {
  const [status, setStatus] = useState("Active");
  const menuRef = useRef();
  const statusRef = useRef();

  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !statusRef.current.contains(e.target)
        )
          setIsClose(true);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);
  return (
    <ProfilContainer>
      <ProfilContainerHeader>
        <HeadingPrimary text="Settings" className="u-mb-s" />
      </ProfilContainerHeader>
      <ProfilInfo>
        <Thumbnail isBig={true} img={ana} withButton />
        <HeadingSecendary
          isBig={true}
          text="Aimarah Oussama"
          className="u-mb-xs u-mt-s"
        />
        <StatusControlContainer>
          <StatusControl ref={statusRef} onClick={() => setIsClose(!isClose)}>
            <p className="text-muted">{status}</p>
            <i className="ri-arrow-drop-right-line"></i>
          </StatusControl>
          <AnimatePresence>
            {!isClose && (
              <motion.div
                initial={{
                  opacity: 0,
                  zIndex: 30,
                }}
                animate={{
                  opacity: 1,
                  zIndex: 30,
                }}
                exit={{
                  opacity: 0,
                  zIndex: 30,
                }}
                transition={{ duration: 0.4 }}
                ref={menuRef}
              >
                <PopupMenu>
                  <li>Available</li>
                  <li>Busy</li>
                </PopupMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </StatusControlContainer>
      </ProfilInfo>
      <DropdownContainer>
        <Dropdown name="Personal Info">
          <div className="u-dflex u-jcsb">
            <div>
              <p>Name</p>
              <h5>Aimarah Oussama</h5>
            </div>

            <IconButton icon="ri-edit-fill" text="Edit" />
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

        <Dropdown name="Privacy">
          <PrivacyControl className="border-bottom">
            <p>Profile photo</p>
            <div>
              <PrivacyBtn>
                Everyone <i className="ri-arrow-drop-right-line"></i>
              </PrivacyBtn>
            </div>
          </PrivacyControl>
          <PrivacyControl className="border-bottom">
            <p>Last seen</p>
            <div>
              <Toggle />
            </div>
          </PrivacyControl>
          <PrivacyControl className="border-bottom">
            <p>Status</p>
            <div>
              <PrivacyBtn>
                Everyone <i className="ri-arrow-drop-right-line"></i>
              </PrivacyBtn>
            </div>
          </PrivacyControl>
          <PrivacyControl className="border-bottom">
            <p>Read receipts</p>
            <div>
              <Toggle />
            </div>
          </PrivacyControl>
          <PrivacyControl className="border-bottom">
            <p>Groups</p>
            <div>
              <PrivacyBtn>
                Everyone <i className="ri-arrow-drop-right-line"></i>
              </PrivacyBtn>
            </div>
          </PrivacyControl>
        </Dropdown>

        <Dropdown name="Security">
          <PrivacyControl>
            <p>Show security notification</p>
            <div>
              <Toggle />
            </div>
          </PrivacyControl>
        </Dropdown>

        <Dropdown name="Help">
          <PrivacyControl className="border-bottom">
            <p className="link">FAQs</p>
          </PrivacyControl>
          <PrivacyControl className="border-bottom">
            <p className="link">Contact</p>
          </PrivacyControl>
          <PrivacyControl>
            <p className="link">Terms & Privacy policy</p>
          </PrivacyControl>
        </Dropdown>
      </DropdownContainer>
    </ProfilContainer>
  );
};

export default Settings;
