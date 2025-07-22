import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Service from './Sections/Service'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);
  return (
    <main className='relative min-h-screen w-full overflow-x-auto'>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <Hero />
          <Service />
          <div className='h-screen bg-DarkLava'>

          </div>
        </div>
      </div>


    </main>
  )
}

export default App
