import React, { useRef } from 'react'
import Marquee from '../Components/Marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText)
const Contact = () => {
    const containerRef = useRef(null);
    const items = ["Инновации", "Точность", "Доверие", "Сотрудничество", "Совершенство"];
    const items2 = ["Свяжитесь со мной", "Свяжитесь со мной", "Свяжитесь со мной", "Свяжитесь со мной", "Свяжитесь со мной"]

    useGSAP(() => {

        let split = new SplitText("#contactP", {
            type: "lines"
        });


        gsap.from(split.lines, {
            x: function (index) {
                return index % 2 === 0 ? 300 : -2 - 300;
            },
            duration: function (index) {
                const durations = [1.5, 1.2, 1.8];
                return durations[index] || 1;
            },
            opacity: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#contactSummary",
                scrub: true,
                start: "top center",
                end: "bottom center"
            }
        });

    }, []);
    return (
        <section id='contactSummary' ref={containerRef} className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16'>
            <Marquee items={items} />
            <div className='font-light text-center contact-text-responsive'>
                <p id='contactP' className='text-center'>
                    "Давайте создадим"
                    <br />
                    <span className='text-normal'>запоминающееся</span> &{" "}
                    <span className='italic'>вдохновляющее</span>
                    <br />
                    веб-приложение
                    <span className='text-gold'> вместе</span>
                </p>
            </div>
            <Marquee reverse items={items2} />
        </section>
    )
}

export default Contact
