import React from "react";
import Reveal from "./Reveal";

export default function ContactSection() {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <Reveal>
                    <div className="contact-grid">
                        <div>
                            <h2>Contact</h2>
                            <p className="subtitle">Open to opportunities — happy to chat about product, architecture and frontend.</p>
                            <p>
                                Email: <a href="mailto:dan@example.com">dan@example.com</a>
                            </p>
                            <p>
                                GitHub: <a href="https://github.com/danhiler" target="_blank" rel="noreferrer">github.com/danhiler</a><br/>
                                LinkedIn: <a href="https://www.linkedin.com/in/danhiler" target="_blank" rel="noreferrer">linkedin.com/in/danhiler</a>
                            </p>
                        </div>
                        <div className="contact-card">
                            <p>Prefer a resume or quick intro? Send a note and I’ll respond promptly.</p>
                            <a className="cta" href="mailto:dan@example.com">Message me</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}