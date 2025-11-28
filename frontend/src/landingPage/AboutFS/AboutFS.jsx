import React from 'react'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import HeroImg from './HeroImg';
import AboutInfo from './AboutInfo';
import CardTab from './Cards/CardTab';
import GoalTab from './Goals/GoalTab';
import InfoTab from '../home/InfoTab/InfoTab';
import Discover from '../../Discover';
import Visit1 from './VisitFS/Visit';
function AboutFS() {
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
            <HeroImg/>
            <AboutInfo/>
            <CardTab/>
            <GoalTab/>
            <InfoTab/>
            <Visit1/>
            <Discover/>
        </ScrollAnimate>
     );
}

export default AboutFS;