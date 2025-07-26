import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalNavbar from './Components/GlobalNavbar';
import Navbar from "./Components/Navbar"



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const location = useLocation();
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
      <GlobalNavbar />
      {location.pathname === "/" && <Navbar />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
        </div>
      </div>

    </main>
  )
}

export default App
