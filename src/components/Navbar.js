// src/components/Navbar.js

import React, { useState } from "react";
import "./Navbar.css"; // Bu dosyada stil kodları olacak

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMenuOpen(false); // Menü kapansın
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* Dilersen logo ya da isim ekleyebilirsin */}
            </div>

            {/* Hamburger Menü İkonu */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}></div>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}></div>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}></div>
            </div>

            {/* Menü Linkleri */}
            <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
                <li><a href="#home" onClick={(e) => handleNavLinkClick(e, "home")}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={(e) => handleNavLinkClick(e, "about")}>Ben Kimim</a></li>
                <li><a href="#skills" onClick={(e) => handleNavLinkClick(e, "skills")}>Yeteneklerim</a></li>
                <li><a href="#portfolio" onClick={(e) => handleNavLinkClick(e, "portfolio")}>Projelerim</a></li>
                <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, "contact")}>İletişim</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
