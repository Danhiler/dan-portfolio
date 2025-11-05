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
                                Email: <a href="mailto:danhiler@gmail.com">danhiler@gmail.com</a>
                            </p>
                            <p style={{lineHeight: '1.5rem'}}>
                                GitHub: <a href="https://github.com/danhiler" target="_blank" rel="noreferrer">https://github.com/danhiler</a><br/>
                                LinkedIn: <a href="https://www.linkedin.com/in/danhiler" target="_blank" rel="noreferrer">https://linkedin.com/in/danhiler</a><br />
                                Whatsapp: <a href="https://wa.me/524426798891" target="_blank" rel="noreferrer">+52 4426798891</a>
                            </p>
                        </div>
                        <div className="contact-card">
                            <p>Prefer a resume or quick intro? Send a note and I’ll respond promptly.</p>
                            <a className="cta" href="https://wa.me/524426798891" target='_blank'>Message me</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}