import React, { useState } from "react";

import Nav from "./Nav";
import SideNav from "../Sidebar/SideNav";
import menuBar from "../../assets/images/bars-solid.svg";
import menuClose from "../../assets/images/window-close-solid.svg";
import { Squash as Hamburger } from "hamburger-react";
const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="layout flex">
      <div className={`${menu ? "open" : "close"}`}>
        <SideNav />
      </div>
      <div>
        <Nav title={props.title} />
        <span className="menuBar">
          <Hamburger toggled={menu} toggle={setMenu} />
        </span>

        <main>
          <div>{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
