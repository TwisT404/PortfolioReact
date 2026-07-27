import experiencesData from "../../data/experiences.json";
import "../../styles/About/experiences.css";
import { useEffect, useState } from "react";

interface Experience {
    type: string;
    entreprise: string;
    lieu: string;
    pays: string;
    poste: string;
    periode: {
        debut: string;
        fin: string | null;
    };
    missions: string[];
}

export default function Experiences() {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    let nbExperiences = experiences.length;

    useEffect(() => {
        setExperiences(experiencesData.experiences_professionnelles);
    }, []);
    return (
        <>
        <section className="education">

            <div className="education-header">
                <span>Expériences Professionnelles</span>
                <span>{nbExperiences} expériences</span>
            </div>

            <div className="timeline">
            {experiences.map((experience , index) => (
                <article className="timeline-item purple" key={index}>

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <div className="timeline-meta">
                            <span>{experience.periode.debut} — {experience.periode.fin ?? "Présent"}</span>
                            <span>{experience.lieu}, {experience.pays}</span>
                        </div>

                        
                        <h2>{experience.poste}</h2>

                        <h3>{experience.type} | {experience.entreprise}</h3>

                        <p>
                            {experience.missions.join(", ")}
                        </p>

                    </div>

                </article>
            ))}


            </div>

        </section>
        </>
    );
};