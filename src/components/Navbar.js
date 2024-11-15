import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({ searchTerm, handleSearchChange }) => {
  const navigateToGitHub = () => {
    const githubRepoUrl = "https://github.com/Kiran1689/Awesome-Dev-Portfolios";
    window.open(githubRepoUrl, "_blank");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <div className="nav-button">
          <div className="box">D</div>
          <div className="box">E</div>
          <div className="box">N</div>
          <div className="box">N</div>
          <div className="box">Y</div>
          <div className="box">S</div>
          <div className="box">A</div>
          <div className="box">N</div>
          <div className="box">T</div>
          <div className="box">O</div>
          <div className="box">S</div>
          <div className="box">A</div>
        </div>
      </div>
      <div className="search-filter">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by Name"
        />
        <button className="Btn" onClick={navigateToGitHub}></button>
      </div>
    </nav>
  );
};

export default Navbar;
