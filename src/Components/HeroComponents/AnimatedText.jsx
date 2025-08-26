import React, { useEffect, useRef } from 'react'
import { TextPlugin } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(TextPlugin);

const AnimatedText = () => {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const observerRef = useRef(null);

    const words = [
        "Page not even born ",
        "Brain not found  ",
        "Reality does not compile",
        "Syntax of existence error",
        "Requesting meaning… failed"
    ];

    useEffect(() => {
        let i = 0;
        let isAnimating = false; // чтобы не запускалось дважды

        const typeWord = () => {
            gsap.to(textRef.current, {
                duration: 1,
                text: words[i % words.length],
                ease: "none",
                onComplete: () => {
                    gsap.delayedCall(1, eraseWord);
                },
            });
        };

        const eraseWord = () => {
            gsap.to(textRef.current, {
                duration: 0.8,
                text: "",
                ease: "none",
                onComplete: () => {
                    i++;
                    typeWord();
                },
            });
        };

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isAnimating) {
                        isAnimating = true;
                        typeWord();
                    }
                });
            },
            { threshold: 0.5 } // 50% элемента в зоне видимости
        );

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            if (observerRef.current && containerRef.current) {
                observerRef.current.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <p
            ref={containerRef}
            className="text-sm font-light tracking-[0.5rem] uppercase text-black text-left pl-2"
        >
            404 - <span ref={textRef}></span>
        </p>
    );
};

export default AnimatedText;
