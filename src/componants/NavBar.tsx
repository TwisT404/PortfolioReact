import { useState,  useEffect } from "react";
import logo from "../assets/Logo.jpg";
import "../style/navbar.css";   
import { FaMoon, FaSun  } from "react-icons/fa";

function NavBar() {
    const [dark, setDark] = useState(true);
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
    </header>
    </>
)
}

export default NavBar


