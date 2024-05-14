import React from "react";
import NavBar from "../components/landingPage/NavBar";
import Footer from "../components/landingPage/Footer";
import Body from "../components/landingPage/Body";

const LandingPage = () => {
  return (
    <div className="w-full h-full md:flex flex-col">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

export default LandingPage;
