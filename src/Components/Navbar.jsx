import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import socials from '../Constants';

const Navbar = () => {
    const navRef = useRef(null);
    const topRef = useRef(null);
    const btmRef = useRef(null);
    const linksRef = useRef([]);
    const [isOpen, setIsOpen] = useState(false);
    const [ready, setReady] = useState(false); // ждём монтирования

    const navLinks = ['Главная', 'Услуги', 'Обо мне', 'Работы', 'Контакты'];

    // Устанавливаем начальное положение один раз
    useGSAP(() => {
        if (navRef.current) {
            gsap.set(navRef.current, { xPercent: 100 });
            gsap.set(linksRef.current, { xPercent: 20, opacity: 0 });
        }
        setReady(true); // теперь можно анимировать
    }, []);

    // Основная анимация — только когда ready === true
    useGSAP(() => {
        if (!ready) return;

        const tl = gsap.timeline();

        if (isOpen) {
            tl.to(navRef.current, { xPercent: 0, duration: 1, ease: "power1.inOut" });
            tl.to(
                linksRef.current,
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.1,
                },
                '<'
            );
            tl.to(topRef.current, { rotate: -45, y: -5 }, '<');
            tl.to(btmRef.current, { rotate: 45, y: 1 }, '<');
        } else {
            tl.to(navRef.current, { xPercent: 100, duration: 1, ease: "power1.inOut" });
            tl.to(
                linksRef.current,
                {
                    xPercent: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.in',
                    stagger: 0.05,
                },
                '<'
            );
            tl.to(topRef.current, { rotate: 0, y: 0 }, '<');
            tl.to(btmRef.current, { rotate: 0, y: 0 }, '<');
        }
    }, [isOpen, ready]);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 z-50 flex flex-col justify-between w-full h-full px-10 py-28 uppercase bg-black text-white/80 gap-y-10 md:w-1/2 md:left-1/2"
            >
                <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
                    {navLinks.map((link, index) => (
                        <div
                            ref={(el) => (linksRef.current[index] = el)}
                            key={index}
                            className="will-change-transform"
                        >
                            <a className="transition-all duration-300 cursor-pointer hover:text-white">
                                {link}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Email</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">
                            tonovgleb@gmail.com
                        </p>
                    </div>
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Социальные сети</p>
                        <div className="flex flex-wrap gap-x-6 pt-[2dvw] md:pt-1 md:justify-between">
                            {socials.map((item, index) => (
                                <a key={index} href={item.link}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
            >
                <span
                    ref={btmRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                />
                <span
                    ref={topRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                />
            </div>
        </>
    );
};

export default Navbar;
