
import { useGSAP } from '@gsap/react'
import Navbar from '../Components/Navbar';
import Hero from '../Sections/Hero';
import Service from '../Sections/Service';
import AboutServices from '../Sections/AboutServices';
import Work from '../Sections/Work';

const MainFrontend = () => {

    return (
        <>

            <Hero />
            <Service />
            <AboutServices />
            <Work />
            <div className='h-screen '>
            </div>
        </>

    )
}

export default MainFrontend
