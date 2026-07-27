import "./../styles/projects.css";
import projetsData from "../data/projets.json";
import { useEffect, useState } from "react";

interface Project {
    nom: string;
    description: string;
    Outils: string[];
    type: string;
}

export default function Projects() {
    const [projets, setProjets] = useState<Project[]>([]);
    
    useEffect(() => {
        setProjets(projetsData.projets);
    }, []);

    return (
        <>
        <section className="projects">

            <div className="projects-header">
                <span>Travaux séléctionnés :</span>
            </div>
            {projets.map((projet: Project, index: number) => (
            <article className="project">

                <span className="project-number">{index + 1}</span>

                <div className="project-title">
                    <h2>{projet.nom}</h2>
                </div>

                <div className="project-description">

                    <p>
                        {projet.description}
                    </p>

                    <div className="project-tags">
                        {projet.Outils.map((outil: string, i: number) => (
                            <span key={i} className="purple-tools">
                                {outil}
                            </span>
                        ))}
                    </div>

                </div>

                <span className="project-category">
                    {projet.type}
                </span>

            </article>

            ))}

        </section>
        </>
    );
}
