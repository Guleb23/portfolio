import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react"
import { useMediaQuery } from "react-responsive";

const Paragraph = ({ textRef, inputText }) => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const text = isMobile
        ?
        inputText || "Создаю современные и эффективные веб-приложения, которые помогают вывести ваш бизнес, стартап или личный проект на новый уровень."
        :
        inputText || "Создаю современные и эффективные веб-приложения,<br/> которые помогают вывести ваш бизнес, стартап<br/> или личный проект на новый уровень."


    return (
        <div className="py-12 sm:py-16 px-5 text-end">
            <p ref={textRef} className="font-light uppercase text-lg lg:text-xl xl:text-4xl " dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Paragraph
