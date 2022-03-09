import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import wallet_icon from "../../assets/images/wallet_icon.png";
import star from "../../assets/images/star.png";
import speaker from "../../assets/images/speaker.png";
import logo from "../../assets/images/logo.png";
import { NavItems } from "./NavItems";


const SideNav = () => {
  const [displayValue, setDisplayValue] = useState(false);
  return (
    <aside>
      <div className="side_wrapper">
        <div className="center">
          <img src={logo} alt="logo" />
        </div>
        <div className="balance">
          <div className="flex_between">
            <div className="flex">
              <img
                className="wallet_icon"
                src={wallet_icon}
                alt="wallet_icon"
              />
              <div className="inline">
                <p>Wallet Balance</p>
                <p>
                  <strong>{displayValue ? "$15,001.00" : "******"}</strong>
                </p>
              </div>
            </div>
            {displayValue ? (
              <AiOutlineEyeInvisible
                style={{ cursor: "pointer" }}
                onClick={() => setDisplayValue(!displayValue)}
              />
            ) : (
              <AiOutlineEye
                style={{ cursor: "pointer" }}
                onClick={() => setDisplayValue(!displayValue)}
              />
            )}
          </div>
          <div>
            <img src={star} className="wallet_icon" alt="star" />
            <div className="inline">
              <p>Awarded Points</p>
              <p>
                <strong>35</strong>
              </p>
            </div>
          </div>
          <div className="flex_between">
            <button>Pay-In</button>
            <button>Pay-Out</button>
          </div>
        </div>
        <div className="dashboard">
          <ul className="dash_body">
            {NavItems?.map((item) => (
              <li>
                <NavLinkItem
                  name={item?.name}
                  link={item?.url}
                  icon={item.icon}
                  other={item?.otherIcon}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="refer">
          <div className="flex">
            <img src={speaker} alt="speaker" />
            <div>
              <h4>Refer and earn</h4>
              <p>Use the below link to invite friends</p>
            </div>
          </div>
          <button>Invite Friends</button>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;

function NavLinkItem({ name, icon, link }) {
  return (
    <NavLink
      className={(navData) => (navData.isActive ? "active" : "not_active")}
      to={link}
    >
      {icon} <p>{name}</p>
    </NavLink>
  );
}
