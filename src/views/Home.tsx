import "../style/home.css"
function Home() {

  return (
    <>
      <section className="hero">

          <span className="hero-location">
              PORTFOLIO —  Sannois, FR
          </span>

          <h1 className="hero-title">
              <span>CEDRIC</span>
              <span className="gradient">TANGHE</span>
          </h1>

          <div className="hero-bottom">

              <div className="hero-description">
                  <p>
                      Développeur Web et Mobile, je suis passionné par la création d'expériences numériques innovantes et intuitives. 
                      Je suis actuellement à la recherche d'une alternance pour mettre mes compétences en pratique et continuer à apprendre dans un environnement stimulant.
                  </p>

                  <div className="hero-status">
                      <span className="dot"></span>
                      Recherche d'alternance — 24 mois
                  </div>
              </div>

              <div className="hero-actions">
                  <a href="/" className="btn-primary">
                      Travaux séléctionnés ↗
                  </a>

                  <a href="/" className="btn-secondary">
                      Rester en contact ↗
                  </a>
              </div>

          </div>

      </section>
  
    </>
  );
}

export default Home
