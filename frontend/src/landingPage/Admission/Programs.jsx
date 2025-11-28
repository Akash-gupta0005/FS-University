import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import CardTab from '../AboutFS/Cards/CardTab'

function Programs() {
    return ( 
        <ScrollAnimate>
            <h1 className='text-center fw-bolder my-4' style={{fontSize:'3rem'}}>Programs</h1> 
            <p className="text-muted lh-lg fs-5 text-center fw-semibold mb-5">Our programs meet all national education standards and have earned <br /> recognition for their quality. The university has received honors like:</p>
            <CardTab/>
        </ScrollAnimate>
     );
}

export default Programs;