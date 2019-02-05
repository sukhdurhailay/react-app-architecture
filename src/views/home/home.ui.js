import React from "react";

import Image from "../../components/image";
import Logo from "../../logo.svg";

const HomeUI = () => {
  return (
    <div>
      <p>Home</p>
      <div className="App-logo">
        <Image src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default HomeUI;
