"use client";
import React, { useEffect, useRef, ReactNode } from "react";

export default function Reveal({ children, rootMargin = "0px 0px -10% 0px" }: { children: ReactNode; rootMargin?: string }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}