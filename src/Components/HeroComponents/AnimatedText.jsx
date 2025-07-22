import React, { useEffect, useRef } from 'react'
import { TextPlugin } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(TextPlugin);

const AnimatedText = () => {
    const textRef = useRef(null);
    const words = [
        "Page not even born ",
        "Brain not found  ",
        "Reality does not compile",
        "Syntax of existence error",
        "Requesting meaning… failed"
    ]
    useEffect(() => {
        let i = 0;

        const typeWord = () => {
            gsap.to(textRef.current, {
                duration: 1,
                text: words[i % words.length],
                ease: "none",
                onComplete: () => {
                    gsap.delayedCall(1, eraseWord); // пауза перед удалением
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

        typeWord(); // старт цикла
    }, []);
    return (
        <p
            className="text-sm font-light tracking-[0.5rem] uppercase  text-black text-left pl-2">
            404 - <span ref={textRef}></span>
        </p>
    )
}

export default AnimatedText

