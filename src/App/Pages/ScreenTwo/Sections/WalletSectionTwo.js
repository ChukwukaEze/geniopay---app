import React from "react";
import { FiArrowDownLeft, FiSend } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { OtherNavItems } from "../../../Sidebar/NavItems";
import { BsArrowUpRight } from "react-icons/bs";

export const WalletSectionTwo = () => {
  const location = useLocation();
  return (
    <div className="walletSectionTwo">
      <div className="wrapper_box2">
        <div className="flex_between box1">
          <div>
            <small>Active</small>
            <p>EUR Wallet</p>
            <p>EUR</p>
          </div>
          <strong>€2,000,000.50</strong>
        </div>

        <div className="flex_between">
          <div>
            <p>Ledger Balance</p>
            <p>Blocked Balance</p>
          </div>
          <div>
            <p> 2,000,000.50</p>
            <p>€0.00</p>
          </div>
          <div>
            <p>Total Incoming</p>
            <p>Total Outgoing</p>
          </div>
          <div>
            <p>€2,000,000.50</p>
            <p>€5,000,000.50</p>
          </div>
        </div>

        <div className="btn_group flex_between">
          <button>
            <Link to="/">
              <span>
                <FiSend />
              </span>{" "}
              Payment
            </Link>
          </button>
          <button>
            <Link to="/">
              <span>
                <FiArrowDownLeft />
              </span>{" "}
              Pay In
            </Link>
          </button>
          <button>
            <Link to="/">
              <span>
                <FaExchangeAlt />
              </span>{" "}
              Exchange
            </Link>
          </button>
        </div>
        <div>
          <select name="" id="">
            <option value="MoreOptions">More Options</option>
          </select>
        </div>
        <div className="">
          <div className="other_options">
            {OtherNavItems?.map((item) => (
              <OtherNavItem name={item?.name} icon={item?.icon} />
            ))}
          </div>
        </div>
        <ul
          className="my-20 my-40"
          style={{ display: "flex", gap: "0px 35px" }}
        >
          <Link
            to={"?active"}
            className={
              location.search.includes("?active") || location.search === ""
                ? "active_subnav"
                : ""
            }
            style={{ paddingBottom: "12px" }}
          >
            Active
          </Link>
          <Link
            to={"?k=transactions"}
            className={
              location.search.includes("?k=transactions") ? "active_subnav" : ""
            }
            style={{ paddingBottom: "12px" }}
          >
            Transactions
          </Link>
          <Link
            to={"?k=invoice"}
            className={
              location.search.includes("?k=invoice") ? "active_subnav" : ""
            }
            style={{ paddingBottom: "12px" }}
          >
            Invoice
          </Link>
        </ul>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>22 Jull 2022</p>
          <p>All</p>
        </div>
        <div className="active_data" style={{ marginTop: "20px" }}>
          {location.search.includes("?active") || location.search === "" ? (
            <>
              <div
                className="other_options pay_options"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span className="img_holder for_trans">
                  <span className="icons_itself">
                    <BsArrowUpRight />
                  </span>
                </span>{" "}
                <div>
                  <div>
                    <p>Pay In Voucher</p>
                    <p>EUR Wallet</p>
                  </div>

                  <h4>$750.57</h4>
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
    </div>
  );
};

function OtherNavItem({ icon, name }) {
  return (
    <div>
      <span className="img_holder">
        <span className="icons_itself">{icon}</span>
      </span>{" "}
      <p>{name}</p>
    </div>
  );
}
