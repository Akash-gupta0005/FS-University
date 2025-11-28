import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import RightComp from '../Campus/Facilities/RightComp';
import LeftComp from '../Campus/Facilities/LeftComp';

function Appliers() {
    return (
        <ScrollAnimate>
            <h1 className='text-center fw-bolder my-4' id='applierHead' style={{ fontSize: '3rem' }}>Who Can Apply?</h1>
            <p id='applierPara' className="text-muted lh-lg fs-5 px-5 text-center fw-semibold mb-5">FS University welcomes applications from students at all academic levels - fresh high school graduates seeking undergraduate degrees, bachelor's holders pursuing advanced studies, and research enthusiasts aiming for doctoral programs.  Whether you're beginning your higher education journey or taking the next step in your academic career, we provide tailored pathways to help you achieve your goals.</p>
            <RightComp
                imgSrc='\media\assets\img1.jpg'
                RightTitle='Undergraduate Students'
                Desc='Undergraduate Students
                    Completed 12th grade with minimum 50% marks' 
                    btnText='Apply Now'
                    hrefLink='/admissionForm'/>
            <LeftComp
                imgSrc='\media\assets\img2.jpg'
                LeftTitle='Doctoral Programs'
                Desc="Master's degree with passion for research" 
                btnText='Apply Now'
                hrefLink='/admissionForm'/>
            <RightComp
                imgSrc='\media\assets\img3.jpg'
                RightTitle='Research Scholars'
                Desc='Master’s degree holders interested in Ph.D. programs' 
                btnText='Apply Now'
                hrefLink='/admissionForm'/>
            <LeftComp
                imgSrc='\media\assets\img4.jpg'
                LeftTitle='Working Professionals'
                Desc='Special evening/weekend programs available' 
                btnText='Apply Now'
                hrefLink='/admissionForm'/>
        </ScrollAnimate>
    );
}

export default Appliers;