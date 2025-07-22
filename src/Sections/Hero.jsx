import ModelComponent from "../Components/HeroComponents/ModelComponent";
import TextComponent from "../Components/HeroComponents/TextComponent";

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col justify-end min-h-screen w-full">
            <TextComponent />
            <ModelComponent />
        </section>
    )
}

export default Hero
