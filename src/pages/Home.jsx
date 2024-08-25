import React from "react";
import Header from "../components/Header";
import Maincontent from "../components/Maincontent";
import Footer from "../components/Footer";

const Home = () => {
  const heading = "Hop on a ride with G.O.A.T";
  return (
    <>
      <Header />
      <Maincontent heading={heading} />
      <Footer />
    </>
  );
};

export default Home;
