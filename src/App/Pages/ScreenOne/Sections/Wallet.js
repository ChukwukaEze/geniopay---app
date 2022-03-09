import React from "react";
import Card from "../../../Components/Card";
import usaFlags from "../../../../assets/images/usa_flags.png";
import {IoIosAddCircleOutline} from "react-icons/io"

const Wallet = () => {
  const wallets = [
    {
      title: "Personal account",
      currency: "USD",
      image: usaFlags,
      amount: "$10,250.00",
      background: "#FFF6E6",
    },
  ];
  return (
    <div className="wallet">
      <div className="wallet_head">
        <h2>Wallet</h2>
        <p className="text_secondary">View all wallets</p>
      </div>
      <div className="card_wrapper">
        {wallets.map((wallet, index) => (
          <Card key={index} wallet={wallet} />
        ))}
        <div className="card add_more">
          <div className="flex_between_max add_more">
            <IoIosAddCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
