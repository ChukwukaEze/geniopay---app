import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import WalletSectionOne from "./Sections/WalletSectionOne";
import { WalletSectionTwo } from "./Sections/WalletSectionTwo";

const ScreenTwo = () => {
  return (
    <Layout title="Wallet">
      <div className="screenTwo">
        <div className="flex_between">
          <h2>Your Wallet (s) </h2>
          <button>
            <Link to="/">+ Create New Wallet</Link>
          </button>
        </div>
        <section>
          <WalletSectionOne />
          <WalletSectionTwo />
        </section>
      </div>
    </Layout>
  );
};

export default ScreenTwo;
