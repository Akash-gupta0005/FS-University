import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';

function WhyFS() {
    return ( 
        <ScrollAnimate>
            <div className="container-fluid mt-5">
                <div className="row p-3 text-center">
                    <h1 className='fw-bolder'>Why Choose FS University?</h1>
                    <p className='text-muted mt-3 fs-5 text-center text-wrap'>
                        At FS University, we empower students to become tomorrow’s leaders through excellence in education,<br /> research, and industry collaboration.
                    </p>
                </div>
                <div className="row p-3">
                    {/* <InfoTab/> */}
                </div>
            </div>
        </ScrollAnimate>
     );
}

export default WhyFS;