import React from "react";
import Reveal from "./Reveal";

const experiences = [
    {
        title: "Senior Full-stack Engineer",
        company: "Freelance",
        logo: "/logos/dan-logo.jpg",
        date: "2025 — Present",
        bullets: ["Led frontend for product X", "Mentored team and improved DX", "Delivered 2x performance improvements"],
    },
    {
        title: "Senior Full‑stack Engineer",
        company: "Wix.com",
        logo: "/logos/wix-logo.jpg",
        date: "2023 — 2025",
        bullets: ["Led the rewrite of the App Installer used by millions of Wix users", "Improved build stability and release processes through automated testing and modular architecture."],
    },
    {
        title: "Senior Full-stack Engineer",
        company: "Netapp",
        logo: "/logos/netapp-logo.jpg",
        date: "2020 — 2023",
        bullets: ["Served as tech lead and focal point for the Israel R&D team", "Designed and implemented a company-wide UI Components Library adopted across multiple cloud products, cutting feature delivery time by ~40%."],
    },
        {
        title: "Frontend Engineer",
        company: "UI human factors",
        logo: "/logos/ui-logo.png",
        date: "2018 — 2020",
        bullets: ["Delivered front-end features for diverse clients under SCRUM methodologies using React and TypeScript.", "Motorola: Developed modem configuration UI for consumer internet devices.","Clewmed (MedTech Startup): Built rapid MVP to demo stage in weeks for investor presentations.","Zerto (Enterprise Backup & Disaster Recovery): Independently developed a complex feature for backup plan creation and recovery flows.","NICE Systems / ECI Telecom: Contributed to front-end solutions in large-scale enterprise projects."],
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
                                    <span className="meta">{e.company} | {e.date}</span>
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