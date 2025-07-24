
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Service from './Sections/Service'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AboutServices from './Sections/AboutServices'
import Work from './Sections/Work'


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true
    });
  }, []);
  return (
    <main className='relative min-h-screen w-full overflow-x-auto'>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Service />
          <AboutServices />
          <Work />
          <div className='h-screen '>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
