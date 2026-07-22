import "../styles/footer.css";
import logo from "../assets/Logo.jpg";

export default function Footer() {
    return (
        <>
        <footer className="footer">

            <div className="footer-top"></div>

            <div className="footer-content">

                <div className="footer-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        Instagram
                    </a>

                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>

                <div className="footer-copyright">
                    <span>© 2026 Cédric Tanghe</span>
                </div>

            </div>

        </footer>
        </>
    );
}