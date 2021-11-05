import React from "react";

import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ActiveChat from "../../components/ActiveChat/ActiveChat";
import SenfForm from "../../components/SendForm/SenfForm";
import "./Right.scss";

const Right = () => {
  return (
    <div className="Right">
      <ChatHeader img={null} status="online" name="Nacho De Varga" />
      <ActiveChat />
      <SenfForm />
    </div>
  );
};

export default Right;
