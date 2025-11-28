import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
function Welcome() {
    return (
        <ScrollAnimate>
            <div className="d-flex flex-column justify-content-center flex-wrap">
                <h1 className='text-center text text-info my-3 fw-bolder'>Welcome to FS University</h1>
                <p className='fw-bolder fs-5 text-center px-5 my-3 lh-lg' id='welcomePara' style={{ color: '#9D2235' }}>
                    We understand that choosing your university path is one of life's most significant decisions. At FS University, we're committed to helping you make the right choice for your future.
                </p>
                <p className='fw-semibold fs-5 text-center px-5 my-3 lh-lg' id='welcomePara' style={{color:'#696969'}}>
                    Founded in 2003, FS University has grown to become a trusted name in higher education across Uttar Pradesh. For over 20 years, we’ve helped students gain knowledge, skills, and values to succeed in their careers and lives.
                    Welcome to FS Education University, where excellence in education has been our hallmark for years. As a UGC-recognized institution and member of the Association of Indian Universities (AIU), FS University offers 100+ programs across engineering, management, sciences, arts, and professional studies. Join our vibrant academic community in Uttar Pradesh’s premier educational hub.
                </p>
            </div>
        </ScrollAnimate>
    );
}

export default Welcome;