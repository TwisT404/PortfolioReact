import { useState,  useEffect } from "react";
import logo from "../assets/Logo.jpg";
import "../style/navbar.css";   
import { FaMoon, FaSun  } from "react-icons/fa";
import Hamburger from "./Hamburger";

function NavBar() {
    const [dark, setDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      useEffect(() => {
            document.documentElement.classList.toggle("dark", dark);
        }, [dark]);
    return(
    <>
    <header className="navbar">
        <a href="/" className="navbar-logo">
            <img src={logo} alt="Logo Portfolio" />
        </a>

        <nav className="navbar-links">
            <a href="/tools">Outils</a>
            <a href="/projects">Projets</a>
            <a href="/contact">Contact</a>
            <button className="dark-mode-toggle" onClick={() => setDark(!dark)}>
                {dark ? <FaSun /> : <FaMoon />}
            </button>
        </nav>

        <div className="navbar-hamburger">
             <button className="dark-mode-toggle" onClick={() => setDark(!dark)}>
                {dark ? <FaSun /> : <FaMoon />}
            </button>
            <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} open={isMenuOpen} />
        </div>
        <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
                <li><a href="/ ">Home</a></li>
                <li><a href="/tools">Outils</a></li>
                <li><a href="/projects">Projets</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default NavBar


