import Footer from "./../componants/Footer";
import "../styles/contact.css";

function Contact() {
    return (
        <>
        <section className="contact">
            <span className="contact-subtitle">
                - RESTER EN CONTACT -
            </span>

            <h2 className="contact-title">
                Disponible 24/24 et 7/7
            </h2>

            <p className="contact-description">
                Je suis toujours ouvert à de nouvelles opportunités et motivé pour relever de nouveaux défis 
                N'hésitez pas à me contacter pour discuter de projets passionnants ou d'idées créatives. 
                Je suis impatient de vous entendre !
            </p>

            <div className="contact-actions">

                <a href="mailto:hello@cedrictanghe.com" className="btn-primary">
                    Envoyer un email
                </a>

                <a href="/CV.pdf" className="btn-secondary">
                    Télécharger CV
                </a>

            </div>

            <div className="contact-status">
                <span className="status-dot"></span>
                Disponible pour de nouvelles opportunités
            </div>

        </section>
        <Footer />
        </>
    );
}

export default Contact;