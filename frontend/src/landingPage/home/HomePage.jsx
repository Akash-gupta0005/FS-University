import React from 'react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import HeroSection from './HeroSection';
import WhyFS from "./WhyFS";
import InfoTab from './InfoTab/InfoTab';
import Placement from './Placement';
import Highlights from './PlacementHighlight';
import Companies from './Companies';
import Discover from '../../Discover';


function HomePage() {
    const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])
    return ( 
        <ScrollAnimate>
            <HeroSection/>
            <WhyFS/>
            <InfoTab/>
            <Placement/>
            <Highlights/>
            <Companies/>
            <Discover/>
        </ScrollAnimate>
     );
}

export default HomePage;