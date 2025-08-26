import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'
import { ImInfo } from 'react-icons/im';


const AboutProjInfo = ({ title = "title", description = "description", frameworks = [] }) => {
    const infoRef = useRef(null);
    const screenRef = useRef(null);
    const iconRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        gsap.set(infoRef.current, { xPercent: 100 });

        gsap.set(screenRef.current, { clipPath: "circle(0% at 50% 50%)" });
        gsap.set(iconRef.current, { color: "#ffffff" });


    }, []);
    useGSAP(() => {
        gsap.set(infoRef.current, { willChange: 'transform' });
        gsap.set(screenRef.current, { willChange: 'transform' });
        gsap.to(infoRef.current, {
            xPercent: isOpen ? 0 : 100,
            duration: 1,
            ease: "power1.inOut"
        });
        gsap.to(screenRef.current, {
            clipPath: isOpen ? "circle(100% at 50% 50%)" : "circle(0% at 50% 50%)",
            duration: 1,
            ease: "power1.inOut"
        });
        gsap.to(iconRef.current, {
            color: isOpen ? "#000000" : "#ffffff",
            duration: 1,
            ease: "power1.inOut"
        });
    }, [isOpen]);

    return (
        <>
            <div ref={infoRef} className='fixed lg:w-1/2 xl:w-1/3 w-screen bg-black z-50 h-screen right-0 bottom-0 rounded-tl-lg rounded-bl-lg'>

                <div className='w-full h-full px-3 py-10 flex flex-col gap-10'>
                    <h2 className='text-white text-[3rem] xl:text-[3rem] leading-[3rem] border-b-2 border-white '>
                        {title}
                    </h2>
                    <div className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/70 text-pretty h-full'>
                        {description}
                    </div>
                    <div className=' flex justify-evenly flex-wrap text-lg leading-relaxed tracking-widest lg:text-xl text-white/60 text-pretty gap-3'>
                        {frameworks.map((item, index) => (
                            <p key={index}>
                                <span>{'{'}</span>
                                {item.name}
                                <span>{'}'}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className='z-[70] fixed h-16 w-16 rounded-full bg-black flex justify-center items-center cursor-pointer hover:bg-gray-800 transition-colors md:right-10 right-3 top-1/2 -translate-y-1/2'>
                <div className='w-full h-full bg-white absolute z-10 rounded-full' ref={screenRef} />
                <div ref={iconRef} className='z-20'>
                    <ImInfo size={26} />
                </div>
            </button>
        </>
    );
}

export default AboutProjInfo;