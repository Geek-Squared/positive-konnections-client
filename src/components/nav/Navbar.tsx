import React, { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../assets/svgs/SVG/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo-menu">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <a
          href="/about"
          className={activeLink === "/about" ? "active-link" : ""}
        >
          About
        </a>
        <a
          href="/method"
          className={activeLink === "/method" ? "active-link" : ""}
        >
          Our Method
        </a>
        <a
          href="/resources"
          className={activeLink === "/resources" ? "active-link" : ""}
        >
          Resources
        </a>
        <a
          href="/comic"
          className={activeLink === "/comic" ? "active-link" : ""}
        >
          Comic Book
        </a>
        <a
          href="/contact"
          className={activeLink === "/contact" ? "active-link" : ""}
        >
          Contact
        </a>
        <a href="/blog" className={activeLink === "/blog" ? "active-link" : ""}>
          Blog
        </a>
        <button
          onClick={() => {
            window.location.href = "/support";
          }}
        >
          Support Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
