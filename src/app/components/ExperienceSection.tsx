import React from "react";
import Reveal from "./Reveal";

const experiences = [
    {
        title: "Senior Full-stack Engineer",
        company: "Freelance",
        logo: "/logos/awesomeco.png",
        date: "2025 — Present",
        bullets: ["Led frontend for product X", "Mentored team and improved DX", "Delivered 2x performance improvements"],
    },
    {
        title: "Senior Full‑stack Engineer",
        company: "Wix.com",
        logo: "/logos/wix-logo.jpg",
        date: "2023 — 2025",
        bullets: ["Built features across stack", "Shipping consumer and admin apps"],
    },
    {
        title: "Senior Full-stack Engineer",
        company: "Netapp",
        logo: "/logos/netapp-logo.jpg",
        date: "2020 — 2023",
        bullets: ["Focused on UI and integrations", "Improved accessibility and testing"],
    },
        {
        title: "Frontend Engineer",
        company: "UI human factors",
        logo: "/logos/ui-logo.png",
        date: "2018 — 2020",
        bullets: ["Focused on UI and integrations", "Improved accessibility and testing"],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="experience-list">
                    {experiences.map((e) => (
                        <Reveal key={e.title}>
                            <div className="experience-item">
                                <div className="exp-left">
                                    <img src={e.logo} alt={e.company} className="company-logo" />
                                </div>
                                <div className="exp-right">
                                    <h3>{e.title}</h3>
                                    <span className="meta">{e.company} — {e.date}</span>
                                    <ul>
                                        {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}