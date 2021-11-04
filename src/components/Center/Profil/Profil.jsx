import React from "react";
import { HeadingPrimary, HeadingSecendary } from "../../utils/Heading/Headings";

import Thumbnail from "../../Thumbnail/Thumbnail";

import { ProfilContainer, ProfilInfo, ProfilStatus } from "./Profil.styles";
import { Badge } from "../../utils/Badge/Badge.styles";

import Oussama from "../../../assets/oussama.jpg";

const Profil = () => {
  return (
    <ProfilContainer>
      <HeadingPrimary text="Profil" className="u-mb-s" />
      <ProfilInfo>
        <Thumbnail isBig={true} img={Oussama} />
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
    </ProfilContainer>
  );
};

export default Profil;
