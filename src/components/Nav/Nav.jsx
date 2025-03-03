import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a className="nav-link" href="/leaderboard">Leaderboard</a>
                <a className="nav-link" href="/practice">Practice</a>
                <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </div>
    );
};

export default Nav;
