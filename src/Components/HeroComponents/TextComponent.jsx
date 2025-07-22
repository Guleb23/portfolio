
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react"
import Header from "./Header";
import Paragraph from "./Paragraph";


const TextComponent = () => {
    const headerRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(() => {
        const textSplit = SplitText.create(textRef.current, { type: "lines" });

        const tl = gsap.timeline();

        tl.from(headerRef.current, {
            xPercent: -50,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut"
        })

        tl.from(textSplit.lines, {
            xPercent: 100,
            opacity: 0,
            stagger: 0.3,
            ease: "power1.inOut",
            duration: 1.2
        }, "<")
    }, [])
    return (
        <div >
            <div className="" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                <Header headerRef={headerRef} />
            </div>
            <div className="relative px=10 text-black">
                <div className="absolute inset-x-0 border-t-2" />
                <Paragraph textRef={textRef} />
            </div>
        </div>
    )
}

export default TextComponent
