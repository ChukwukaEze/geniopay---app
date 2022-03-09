import React from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../../../Components/Input";
import usaFlags from "../../../../assets/images/usa_flags.png";
import australiaFlags from "../../../../assets/images/australia_flags.png";
import ukFlags from "../../../../assets/images/uk_flags.png";

const WalletSectionOne = () => {
  const location = useLocation();
  return (
    <div className="walletSectionOne">
      <div className="head flex_between">
        <div>
          <Input type="text" placeholder="Search" />
        </div>
        <select name="" id="">
          <option value="all">All</option>
        </select>
      </div>
      <ul className="my-20">
        <Link
          to={"?active"}
          className={
            location.search.includes("?active") || location.search === ""
              ? "active_subnav"
              : ""
          }
        >
          Active (3)
        </Link>
        <Link
          to={"?inactive"}
          className={
            location.search.includes("?inactive") ? "active_subnav" : ""
          }
        >
          Inactive (2)
        </Link>
        <Link
          to={"?closed"}
          className={location.search.includes("?closed") ? "active_subnav" : ""}
        >
          Closed (0)
        </Link>
      </ul>
      <div className="active_data">
        {location.search.includes("?active") || location.search === "" ? (
          <>
            <div className="default">
              <div className="flex">
                <img src={australiaFlags} alt="usa flags" />
                <div>
                  <p>EUR Wallet</p>
                  <p>EUR</p>
                </div>
              </div>
              <div className="right">
                <p>€2,000,000.50</p>
                <small>Default</small>
              </div>
            </div>

            <div>
              <div className="flex">
                <img src={usaFlags} alt="australia flags" />
                <div>
                  <p>Personal account</p>
                  <p>USD</p>
                </div>
              </div>
              <div>
                <p>$10,250.00</p>
              </div>
            </div>

            <div>
              <div className="flex">
                <img src={ukFlags} alt="uk flags" />
                <div>
                  <p>Personal account</p>
                  <p>USD</p>
                </div>
              </div>
              <div>
                <p>$10,250.00</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="flex">
              <div>
                <h4>Record Unavaliable</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletSectionOne;
