import React from 'react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import CampusVideos from './CampusVideos';
import Discover from '../../Discover';
import HeroSection from './HeroSection';
import CampusLife from './CampusLife';

function CampusFacility() {
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
            <CampusLife/>
            <CampusVideos/>
            <Discover/>
        </ScrollAnimate>
     );
}

export default CampusFacility;