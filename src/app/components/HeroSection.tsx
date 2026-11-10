import React from "react";
import Reveal from "./Reveal";

export default function HeroSection() {
    return (
        <section id="hero" className="section hero">
            <div className="container hero-grid">
                <Reveal>
                    <div className="hero-content">
                        <h1>Dan Hilerowicz</h1>
                        <p className="subtitle">Full‑stack engineer with 8+ years building scalable web applications, backend services, and polished, high‑performance UIs.</p>
                        <div className="hero-ctas">
                            <a className="cta" href="#projects">See my work</a>
                        
                        </div>
                        <div className="hero-meta">
                            <span>React · Next.js · TypeScript · Node.js & Server · Databases · CI/CD · UX</span>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="hero-photo">
                        <img src="/dan-image.jpeg" alt="Dan Hilerowicz" className="profile-img" />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}