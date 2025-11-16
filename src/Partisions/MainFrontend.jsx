import Hero from '../Sections/Hero';
import Service from '../Sections/Service';
import AboutServices from '../Sections/AboutServices';
import Work from '../Sections/Work';
import Contact from '../Sections/Contact';
import ContactForm from '../Sections/ContactForm';
import { useProgress } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MainFrontend = () => {
    const { progress } = useProgress();
    const [isReady, setIsReady] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    const overlayRef = useRef(null);
    const barRef = useRef(null);
    const contentRef = useRef(null);

    // Плавное увеличение полоски прогресса
    useEffect(() => {
        if (barRef.current) {
            gsap.to(barRef.current, {
                width: `${progress}%`,
                duration: 0.3,
                ease: 'power1.out',
            });
        }
    }, [progress]);

    // Управление показом контента после загрузки
    useEffect(() => {
        if (progress === 100) {
            setShowLoader(false);
        }
    }, [progress]);
    useEffect(() => {
        if (showLoader) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.dataset.scrollY = scrollY; // сохраняем для восстановления
        } else {
            const scrollY = document.body.dataset.scrollY;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            if (scrollY) window.scrollTo(0, parseInt(scrollY));
        }
    }, [showLoader]);

    // Плавное появление/исчезновение лоадера через GSAP
    useEffect(() => {
        if (!overlayRef.current) return;
        const tl = gsap.timeline();
        if (!showLoader) {
            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                transformOrigin: 'center center',
            });
            tl.to(contentRef.current, {
                opacity: 1
            }, -0.5)
        }

    }, [showLoader]);

    return (
        <>

            <div
                ref={overlayRef}
                className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light max-h-screen max-w-screen"

            >
                <p className="mb-6 text-3xl tracking-widest animate-pulse">
                    Loading {Math.floor(progress)}%
                </p>
                <div className="relative h-2 overflow-hidden rounded w-80 bg-white/20">
                    <div
                        ref={barRef}
                        className="absolute top-0 left-0 h-full bg-white"
                        style={{ width: '0%' }}
                    ></div>
                </div>
            </div>


            <div
                ref={contentRef}
                className={`opacity-0`}
            >
                <Hero />
                <Service />
                <Work />
                <Contact />
                <ContactForm />
            </div>
        </>
    );
};

export default MainFrontend;
