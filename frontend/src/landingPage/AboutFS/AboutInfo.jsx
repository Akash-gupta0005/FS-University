import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';

function AboutInfo() {
    return ( 
        <ScrollAnimate>
            <div className="d-flex justify-content-evenly flex-wrap my-3">
                <div style={{width:'600px'}}>
                    <h1 className='fw-semibold text-black'>BEST PRIVATE UNIVERSITY IN UTTAR PRADESH (INDIA)</h1>
                    <p className="text-wrap fw-medium lh-lg" style={{fontSize:'18px',color:'#696969'}}>
                        50 National and International  Academics Tie-ups, FS University bagged various prestigious awards such as Fastest Growing University in Uttar Pradesh 2022 and Most Emerging and Promising University 2021.
                    </p>
                </div>
                <div style={{width:'600px'}}>
                    <p className='fw-bolder' style={{lineHeight:'32px',letterSpacing:'1px',fontSize:'1.1rem',color:'#696969'}}>We are committed to create a learning sphere which will facilitate our students to enhance their skill sets based on the imparted knowledge which will enable them to participate in nation building. Our vision is to be an inclusive, accessible, and valuable platform in fulfilling the aspirations and career goals of our diverse range of students and supporting future leaders, innovators, and entrepreneurs.</p>
                    <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-danger fs-5 btn-md">Read More</button>
                    </div>
                </div>
            </div>
        </ScrollAnimate>
     );
}

export default AboutInfo;