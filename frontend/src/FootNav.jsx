import React from 'react'
import {Link} from 'react-router-dom'
import ScrollAnimate from './ScrollAnimate';
function FootNav() {
    return (
            <div id='footNav' className="d-flex p-1 justify-content-evenly sticky-bottom mb-0 fs-5 fw-semibold  text-light text-center" style={{ backgroundColor: '#a31818ff'}}>
                        <a href="tel:+91-9720205727" className='footer_Nav text-decoration-none text-light'>
                            <i className="fa-solid fa-phone fa-shake  me-2 text-light" ></i>
                            Call Us
                        </a>
                        <a href="/admissionForm" className='footer_Nav text-decoration-none text-light'>
                            Register Now
                        </a>
                        <Link to="/admission" className='text-decoration-none text-light'>
                            Admission 
                        </Link>
            </div>
    );
}

export default FootNav;