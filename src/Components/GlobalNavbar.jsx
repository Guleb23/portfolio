import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const GlobalNavbar = () => {
    const location = useLocation();

    const routes = [
        {
            path: "/",
            label: "Главная",
            rounded: "rounded-bl-2xl rounded-tl-2xl",
            activeBg: "#3C2F2F", // DarkLava
            activeText: "#ffffff"
        },
        {
            path: "/about",
            label: "Обо мне",
            rounded: "rounded-br-2xl rounded-tr-2xl",
            activeBg: "#e5e5e0", // amber-50
            activeText: "#000000"
        }
    ];

    const textRefs = useRef({});
    const overlayRefs = useRef({});

    useEffect(() => {
        routes.forEach(({ path, activeBg, activeText }) => {
            const isActive = location.pathname === path;
            const overlay = overlayRefs.current[path];
            const textEl = textRefs.current[path];

            if (!overlay || !textEl) return;

            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

            if (isActive) {
                tl.to(overlay, { width: '50%', duration: 0.3 })
                    .to(overlay, { width: '100%', duration: 0.3 });

                gsap.to(overlay, { backgroundColor: activeBg, duration: 0.2 });
                gsap.to(textEl, { color: activeText, duration: 0.4 });
            } else {
                tl.to(overlay, { width: '0%', duration: 0.4 });
                gsap.to(textEl, { color: '#ffffff', duration: 0.4 }); // default text color
            }
        });
    }, [location.pathname]);

    return (
        <div className="fixed w-full flex justify-center items-center top-4 z-50">
            <div className="h-16 rounded-2xl flex text-white uppercase overflow-hidden shadow-lg">
                {routes.map(({ path, label, rounded }) => (
                    <Link
                        key={path}
                        to={path}
                        className={`relative w-full h-full p-5 flex justify-center items-center overflow-hidden ${rounded}`}
                    >
                        <div
                            ref={(el) => (overlayRefs.current[path] = el)}
                            className="absolute inset-0 z-0"
                            style={{ width: 0, backgroundColor: 'transparent' }}
                        />
                        <p
                            ref={(el) => (textRefs.current[path] = el)}
                            className="relative z-10 whitespace-nowrap "

                        >
                            {label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GlobalNavbar;
