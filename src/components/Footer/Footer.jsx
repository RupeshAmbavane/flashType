import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
            <p>© 2025 FlashType | Built with ❤️ by Rupesh</p>
            <div className="social-icons">
                <a href="https://github.com/RupeshAmbavane" target="_blank" rel="noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/rupesh-ambavane-962342251/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://twitter.com/RupeshAmbavane" target="_blank" rel="noreferrer">
                    <FaTwitter className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
