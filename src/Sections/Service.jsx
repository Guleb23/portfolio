import { useGSAP } from "@gsap/react"
import ClipTitle from "../Components/ServiceComponents/ClipTitle"
import gsap from "gsap"

const Service = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#benefits",
                start: "top 80%",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.from(".animated-p", {
            xPercent: -100,
            opacity: 0,
            ease: "power3.in"
        })
        tl.to(".animated-title", {
            clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
            opacity: 1,
            stagger: 0.5,
            ease: "circ.inOut"
        })
    }, [])

    return (
        <section id="benefits"
            className="
            mt-20 pb-[3vw] overflow-hidden mb-42 flex flex-col items-center
            lg:min-h-screen
            font-light leading-snug text-center
            ">
            <p className="text-lg lg:text-2xl lg:pb-[5vw] pb-[10vw] pt-[3vw] animated-p uppercase font-light">Что вы получите при работе со мной </p>
            <ClipTitle title={`Чистая архитектура`} bgColor={`#2e70b8`} fontColor={`#e5e5e0`} rotation={`3deg`} />
            <ClipTitle title={`Масштабируемые решения`} bgColor={`#b17272`} fontColor={`#e5e5e0`} rotation={`-1deg`} />
            <ClipTitle title={`Адаптивный интерфейс`} bgColor={`#565e65`} fontColor={`#e5e5e0`} rotation={`1deg`} />
            <ClipTitle title={`Современный стек`} bgColor={`#c3836d`} fontColor={`#e5e5e0`} rotation={`-5deg`} />
        </section>
    )
}

export default Service
