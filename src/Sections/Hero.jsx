import { Suspense } from "react";
import ModelComponent from "../Components/HeroComponents/ModelComponent";
import TextComponent from "../Components/HeroComponents/TextComponent";
import Loader from "../Components/Loader";

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col justify-end min-h-screen w-full">
            <TextComponent title={`Глеб Хлопотов`} />


            <ModelComponent />

        </section>
    )
}

export default Hero
