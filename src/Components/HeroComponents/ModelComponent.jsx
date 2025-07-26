import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { Model } from "./Model";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import Loader from "../Loader";


const ModelComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 1024 });


    return (
        <figure className="absolute inset-0 -z-50" style={{ width: "100vw", height: "100vh" }}>

            <Canvas shadows camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}>
                <ambientLight intensity={0.5} />


                <Float speed={0.7}>
                    <Model scale={isMobile ? 0.5 : 1} position={isMobile ? [0, 0.5, 0] : [0, 0, 0]} />
                </Float>

                <Environment resolution={256}>
                    <group rotation={[-Math.PI / 3, 4, 1]}>
                        <Lightformer form={"circle"} intensity={2} position={[0, 5, -9]} scale={10} />
                        <Lightformer form={"circle"} intensity={2} position={[0, 3, 1]} scale={10} />
                        <Lightformer form={"circle"} intensity={2} position={[-5, -1, -1]} scale={10} />
                        <Lightformer form={"circle"} intensity={2} position={[10, 1, 0]} scale={16} />
                    </group>
                </Environment>
            </Canvas>

        </figure>
    )
}

export default ModelComponent
