import React, { useEffect, useState } from "react";
import { NavLink } from "../navlink";
import mainImg from "../../assets/mainbg1.png";
import mainImg2 from "../../assets/mainbg2.png";
function FirstComponent() {
  return (
    <div className="first-section">
      <div className="first-section-background">
        <img src={mainImg2} alt="NoImg" />
      </div>
      <div className="first-section-container">
        <img src={mainImg} alt="NoImg" className="mainImg" />
        <div className="first-section-content">
          <div className="greeting">
            <span className="welcome">Welcome</span>
            <span className="everyone">Everyone!</span>
          </div>
          <div className="summary">
            I'm Dynamic and highly skilled Senior Full Stack Developer with over
            8 years of experience in designing, developing, and maintaining
            scalable web applications.
          </div>
          <div className="about-btn">
            <NavLink to="/about">
              <p>ABOUT ME</p>
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>
        </div>
        <img src={mainImg} alt="NoImg" />
      </div>
    </div>
  );
}
export default FirstComponent;
