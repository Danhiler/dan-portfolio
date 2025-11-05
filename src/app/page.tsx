import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <footer className="site-footer">
                <div className="container">
                    <span>© {new Date().getFullYear()} Dan Hilerowicz — Built with care.</span>
                </div>
            </footer>
        </>
    );
}