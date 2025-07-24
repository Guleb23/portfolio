import React, { useRef, useState } from 'react'
import TextComponent from '../Components/HeroComponents/TextComponent'
import { projects } from '../Constants'
import { Icon } from '@iconify/react/dist/iconify.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Work = () => {
    const [currentIndex, setCurrentIndex] = useState(null)
    const previewRef = useRef(null)
    const mouse = useRef({ x: 0, y: 0 });
    const moveX = useRef(null);
    const moveY = useRef(null);
    useGSAP(() => {
        moveX.current = gsap.quickTo(previewRef.current, "x", {
            duration: 1.5,
            ease: "power3.out"
        })
        moveY.current = gsap.quickTo(previewRef.current, "y", {
            duration: 2,
            ease: "power3.out"
        })
    }, [])

    const handleMouseEnter = (index) => {
        if (window.innerWidth < 768) {
            return
        }
        setCurrentIndex(index);
        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        })
    }
    const handleMouseLeave = (index) => {
        if (window.innerWidth < 768) {
            return
        }
        setCurrentIndex(null);
        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.out"
        })
    }

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) {
            return
        }

        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;
        moveX.current(mouse.current.x);
        moveY.current(mouse.current.y);
    }
    return (
        <section id='works' className='flex flex-col min-h-screen relative'>
            <TextComponent textColor={`black`} title={`Проекты`} inputText={`Проекты, которые работают: продуманные и эффективные.`} paragraph={`Логика и эстетика в идеальном балансе`} />
            <div onMouseMove={handleMouseMove} className='relative flex flex-col font-light'>
                {projects.map((project, index) => (
                    <div key={index} id='project' className='relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0'
                        onMouseEnter={() => {
                            handleMouseEnter(index);
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave(index);
                        }}>
                        <div className='flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white'>
                            <h2 className='lg:text-[32px] text-[26px] leading-none'>{project.name}
                            </h2>
                            <Icon icon="tabler:arrow-up-right" className='md:size-6 size-5' />
                        </div>
                        <div className='w-full h-0.5 bg-black/80' />

                        <div className='flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12'>
                            {project.frameworks.map((framework) => (
                                <p key={framework.id} className='text-black transition-colors duration-500 md:group-hover:text-white'>
                                    {framework.name}
                                </p>
                            ))}
                        </div>

                        <div className='relative flex items-center justify-center px-10 md:hidden h-[400px]'>
                            <img src={project.bgImage} alt='projImag' className='object-cover w-full h-full rounded-md brightness-50' />
                            <img src={project.image} alt='projBg' className='absolute bg-center px-14 rounded-xl' />
                        </div>
                    </div>
                ))}

                <div ref={previewRef} className='absolute -top-3/6 left-0 z-50 overflow-hidden border-2 border-black pointer-events-none w-[960px] hidden md:block opacity-0 rounded-3xl'>
                    {currentIndex !== null && <img src={projects[currentIndex].image} alt='img' className='object-cover w-full h-full' />}
                </div>
            </div>
        </section>
    )
}

export default Work
