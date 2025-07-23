import React, { useEffect, useRef } from 'react'
import TextComponent from '../Components/HeroComponents/TextComponent'
import { servicesData } from '../Constants'
import Card from '../Components/AboutServicesComponents/Card';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const AboutServices = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const servicesRef = useRef([]);
    const serviceSecRef = useRef(null);


    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: serviceSecRef.current,
                start: isMobile ? "top 90%" : "top 50%",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.from(servicesRef.current, {
            xPercent: -100,
            opacity: 0,
            ease: "power1.inOut",
            stagger: 0.2
        })
        // Анимация элементов внутри карточек
        servicesRef.current.forEach(card => {
            if (card) {
                const elements = card.querySelectorAll('.items-cards');
                gsap.from(elements, {
                    xPercent: -50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                        toggleActions: "play none none none"
                    }
                });
            }
        });




    }, { scope: serviceSecRef });


    return (
        <section ref={serviceSecRef} id='services' className='min-h-screen rounded-t-4xl bg-black'>
            <TextComponent textColor={`white`} title={`Услуги`} inputText={`Создаю оптимизированные full-stack приложения с безопасной архитектурой и продуманным UX для стабильного роста бизнеса.`} paragraph={`Глубже интерфейса, дальше пикселей`} />

            {servicesData.map(({ title, description, items }, index) => (
                <Card
                    title={title}
                    description={description}
                    items={items}
                    ref={(el) => (servicesRef.current[index] = el)}
                    key={index} />
            ))}
        </section>
    )
}

export default AboutServices
