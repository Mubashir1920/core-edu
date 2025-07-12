'use client';
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${isVisible ? 'opacity-100 visible bg-primary cursor-pointer text-white hover:bg-primary/80' : 'opacity-0 invisible'
                }`}
            aria-label="Scroll to top"
        >
            <BsArrowUp className="w-5 h-5" />
        </button>
    );
}
