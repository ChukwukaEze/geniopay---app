import React from "react";
import Activity from "./Sections/Activity";
import Layout from "../../Components/Layout";
import QuickLinks from "./Sections/QuickLinks";
import Wallet from "./Sections/Wallet";

const Home = () => {
  return (
    <Layout title="Welcome, Huss Smith">
      <div className="screenOne">
        <Wallet />
        <QuickLinks />
        <Activity />
      </div>
    </Layout>
  );
};

export default Home;
