import React from 'react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import Hero from './Hero';
import Welcome from './Welcome';
import Discover from '../../Discover';
import Education from './Education';
import Programs from './Programs';
import Careers from './Careers';
import Appliers from './Appliers';
function Admission() {
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
            <Hero/>
            <Welcome/>
            <Education/>
            <Appliers/>
            <Programs/>
            <Careers/>
            <Discover/>
        </ScrollAnimate>
     );
}

export default Admission;