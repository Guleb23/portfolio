import { Icon } from '@iconify/react/dist/iconify.js';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(Observer);

const Marquee = ({
    items = [],
    className = "text-white bg-black",
    icon = "mdi:star-four-points",
    iconClass = "",
    reverse = false,
}) => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const observerRef = useRef(null);
    const tlRef = useRef(null);

    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
                tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap =
                config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
            totalWidth,
            curX,
            distanceToStart,
            distanceToLoop,
            item,
            i;

        gsap.set(items, {
            xPercent: (i, el) => {
                let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
                xPercents[i] = snap(
                    (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                    gsap.getProperty(el, "xPercent")
                );
                return xPercents[i];
            },
        });
        gsap.set(items, { x: 0 });
        totalWidth =
            items[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
            (parseFloat(config.paddingRight) || 0);

        for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop =
                distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
                item,
                {
                    xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                    duration: distanceToLoop / pixelsPerSecond,
                },
                0
            )
                .fromTo(
                    item,
                    {
                        xPercent: snap(
                            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                        ),
                    },
                    {
                        xPercent: xPercents[i],
                        duration:
                            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                        immediateRender: false,
                    },
                    distanceToLoop / pixelsPerSecond
                )
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }

        tl.progress(1, true).progress(0, true); // pre-render

        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }

        return tl;
    }

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!tlRef.current) {
                            // создаем анимацию только при первом появлении
                            const tl = horizontalLoop(itemsRef.current, {
                                repeat: -1,
                                paddingRight: 30,
                                reversed: reverse,
                            });
                            tlRef.current = tl;

                            Observer.create({
                                onChangeY(self) {
                                    let factor = 2.5;
                                    if (
                                        (!reverse && self.deltaY < 0) ||
                                        (reverse && self.deltaY > 0)
                                    ) {
                                        factor *= -1;
                                    }
                                    gsap.timeline({ defaults: { ease: "none" } })
                                        .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
                                        .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
                                },
                            });

                            tl.play();
                        } else {
                            tlRef.current.play();
                        }
                    } else {
                        tlRef.current?.pause();
                    }
                });
            },
            { threshold: 0.3 } // запускаем, если видно хотя бы 30% блока
        );

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            observerRef.current?.disconnect();
            tlRef.current?.kill();
        };
    }, [items, reverse]);

    return (
        <div
            ref={containerRef}
            className={`${className} overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap`}
        >
            <div className="flex items-center px-16 gap-x-32">
                {items.map((text, index) => (
                    <span
                        className="flex items-center gap-x-32"
                        ref={(el) => (itemsRef.current[index] = el)}
                        key={index}
                    >
                        {text} <Icon icon={icon} className={iconClass} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
