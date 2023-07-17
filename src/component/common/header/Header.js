import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [darkMode, setDarkMode] = useState("light-theme");
  const toggleMode = () => {
    if (darkMode === "dark-theme") {
      setDarkMode("light-theme");
    } else {
      setDarkMode("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = darkMode;
  }, [darkMode]);
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <div className="logo">BOLGPAGECLONE</div>
        </div>
        <div className="nav-ops">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/">Video</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">Contact</a>
          </p>
          <p>
            <a href="/">Categories</a>
          </p>
        </div>
        <div className="mode-btn">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
