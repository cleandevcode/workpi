import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CIcon from "@coreui/icons-react";
import Logo from "../assets/icons/logo.svg";
// sidebar nav config

const TheSidebar = () => {
  const show = useSelector((state) => state.sidebarShow);
  console.log("show???->", show);
  return (
    <div className="c-main-sidebar">
      <img src={Logo} width={50} height={50} />
      <ul>
        <li>
          <a href="#/dashboard">
            <CIcon name="cil-file" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="#/theme/typography">
            <CIcon name="cil-credit-card" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="#/charts">
            <CIcon name="cil-graph" width={40} height={40} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(TheSidebar);
