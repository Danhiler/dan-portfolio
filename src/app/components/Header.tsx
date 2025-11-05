import React from "react";

export default function Header() {
    return (
        <header className="site-header">
            <nav className="nav container">
                <a className="logo" href="#hero">Dan Hilerowicz</a>
                <div className="nav-links">
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="social">
                    <a aria-label="GitHub" href="https://github.com/danhiler" target="_blank" rel="noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.12 3.29 9.46 7.86 10.99.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.17a11.03 11.03 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.48 3.17-1.17 3.17-1.17.62 1.59.23 2.77.11 3.06.74.8 1.18 1.82 1.18 3.07 0 4.41-2.71 5.39-5.29 5.67.41.36.78 1.08.78 2.18 0 1.58-.02 2.86-.02 3.25 0 .3.2.66.79.55A11.53 11.53 0 0 0 23.5 12.02C23.5 5.73 18.27.5 12 .5z"/></svg>
                    </a>
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/danhiler" target="_blank" rel="noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM9.5 8.5h3.84v2.07h.05c.53-1 1.85-2.07 3.81-2.07 4.08 0 4.84 2.69 4.84 6.18V24h-4v-7.08c0-1.69-.03-3.86-2.36-3.86-2.36 0-2.72 1.84-2.72 3.73V24h-4V8.5z"/></svg>
                    </a>
                </div>
            </nav>
        </header>
    );
}