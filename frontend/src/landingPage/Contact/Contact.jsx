import React from 'react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import ScrollAnimate from '../../ScrollAnimate'
import '../../effect.css'
import Hero from './Hero';
import CardSection from './CardSection';
import Discover from '../../Discover'
import MapBox from './MapBox'

function Contact() {
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
            <CardSection/>
            <MapBox/>
            <Discover/>
        </ScrollAnimate>
     );
}

export default Contact;