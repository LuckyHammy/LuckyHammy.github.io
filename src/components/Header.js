import React from "react";
import "../assets/header.css";
import Avatar from "../assets/avatar.png";
import { NavLink } from "./navlink";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="avatar">
          <img src={Avatar} alt="NoAvatar" />
        </div>
        <div className="header-lists">
          <div className="header-items">
            <NavLink to="/">
              <button className="header-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span> MyHome
              </button>
            </NavLink>
          </div>
          <div className="header-items">
            <NavLink to="/about">
              <button className="header-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span> AboutMe
              </button>
            </NavLink>
          </div>
          <div className="header-items">
            <NavLink to="/projects">
              <button className="header-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Project
              </button>
            </NavLink>
          </div>
          <div className="header-items">
            <NavLink to="/skills">
              <button className="header-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Skills
              </button>
            </NavLink>
          </div>
          <div className="header-items">
            <NavLink to="/contact">
              <button className="header-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Contact
              </button>
            </NavLink>
          </div>
        </div>
        <div className="header-hamburger">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" />
            <span className="ham-items"></span>
            <span className="ham-items"></span>
            <span className="ham-items"></span>
          </label>
        </div>
      </div>
    </header>
  );
};
export default Header;
