import React, { useRef } from 'react'
import AnimatedText from './AnimatedText';


const Header = ({ headerRef, inputParagraph, title }) => {
    return (
        <div ref={headerRef} className="flex justify-center flex-col gap-6 pt-16 sm:gap-12 px-10">
            {inputParagraph || <AnimatedText />}
            <h1
                className="flex flex-col flex-wrap gap-12  text-[5rem] xl:text-[6rem] leading-[5rem]  sm:gap-16 md:block text-left ">{title}</h1>

        </div>
    )
}

export default Header
