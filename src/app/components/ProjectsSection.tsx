import React from "react";
import Reveal from "./Reveal";

type Project = { title: string; description: string; image: string; link?: string;  };

const projects: Project[] = [
    { title: "Agendia", description: "Business management for professionals", image: "/projects/agendia.png", link: "https://agendia.mx"},
    { title: "Notreco", description: "Social network for stocks analysis", image: "/projects/notreco-logo.png", link: "https://notreco.com"},
    { title: "Reporty", description: "Management of household expenses", image: "/projects/reporty-logo.jpg", link: "https://github.com/Danhiler/reporty-client" },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2>Projects</h2>
                <p className="subtitle">Selected work — code, architecture and delivery.</p>
                <div className="projects-grid">
                    {projects.map((p) => (
                        <Reveal key={p.title}>
                            <article className="project-card">
                                <div className="project-image">
                                    <img src={p.image} alt={p.title} />
                                </div>
                                <div className="project-body">
                                    <h3>{p.title}</h3>
                                    <p>{p.description}</p>
                                    <div className="project-links">
                                        {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live</a>}
                            
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}