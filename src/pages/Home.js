import React, { useState, useEffect } from "react";
import mainImg from "../assets/mainbg.png";
import "../assets/home.css";
import { NavLink } from "../components/navlink";
import FirstComponent from "../components/homepage/firstComponent";
import SecondComponent from "../components/homepage/secondComponent";
import FifthComponent from "../components/homepage/fifthComponent";
import FourthComponent from "../components/homepage/fourthComponent";
import ThirdComponent from "../components/homepage/thirdComponent";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
      </div>
    </>
  );
};
export default Home;
