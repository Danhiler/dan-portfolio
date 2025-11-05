import React from "react";
import Reveal from "./Reveal";

export default function HeroSection() {
    return (
        <section id="hero" className="section hero">
            <div className="container hero-grid">
                <Reveal>
                    <div className="hero-content">
                        <h1>Dan Hilerowicz</h1>
                        <p className="subtitle">Full‑stack developer — frontend leaning. 7 years building polished, high‑performance UIs.</p>
                        <div className="hero-ctas">
                            <a className="cta" href="#projects">See my work</a>
                        
                        </div>
                        <div className="hero-meta">
                            <span>React · Next.js · TypeScript · CSS & Animation · UX</span>
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