import React from "react";
import Reveal from "./Reveal";

type Project = { title: string; description: string; image: string; github?: string; live?: string };

const projects: Project[] = [
    { title: "Project A", description: "Frontend‑heavy app with advanced animations and polished UX.", image: "/projects/project-a.jpg", github: "https://github.com/danhiler/project-a", live: "#" },
    { title: "Project B", description: "SaaS platform with Next.js and scalable API design.", image: "/projects/project-b.jpg", github: "https://github.com/danhiler/project-b", live: "#" },
    { title: "Project C", description: "Data visualization UI optimized for performance.", image: "/projects/project-c.jpg", github: "https://github.com/danhiler/project-c" },
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
                                        {p.github && <a href={p.github} target="_blank" rel="noreferrer">Code</a>}
                                        {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live</a>}
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