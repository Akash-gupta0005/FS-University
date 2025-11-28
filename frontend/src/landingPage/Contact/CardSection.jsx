import React from 'react'
import ScrollAnimate from '../../ScrollAnimate'
import '../../effect.css'

function CardSection() {
    return (
        <ScrollAnimate>
            <div className='container-fluid p-5 mt-3 mb-3 bg-secondary-subtle '>
                <div className="d-flex justify-content-evenly flex-wrap text-center mb-5 p-2">
                    <div className=" bg-white me-4 rounded-2 p-3 mb-3" style={{width:"400px"}}>
                        <h4 className='fw-semibold'>Admissions Inquiry</h4>
                        <p className='text-muted fw-semibold fs-5 m-0'>Phone number</p>
                        <a href="tel:+91-7900889820" className='text-decoration-none fw-medium '>+91-7900889820</a>
                        <br />
                        <p className='text-muted fw-semibold fs-5 m-0'>Email</p>
                        <a href="mailto:admission@fsu.edu.in" className='text-dark text-decoration-none fw-medium'>admission@fsu.edu.in</a>
                    </div>
                    <div className=" bg-white text-dark me-4 rounded-2 p-2 mb-3" style={{width:"400px"}}>
                        <h4 className='fw-semibold'>Visitor Information</h4>
                        <p className='text-muted fw-semibold fs-5 m-0'>Phone number</p>
                        <a href="tel:+91-9720205727" className='text-decoration-none fw-medium '>+91-9720205727</a>
                        <br />
                        <p className='text-muted fw-semibold fs-5 m-0'>Email</p>
                        <a href="mailto:info@fsu.edu.in" className='text-dark text-decoration-none fw-medium'>info@fsu.edu.in</a>
                    </div>
                    <div className=" bg-white text-dark me-4 rounded-2 p-2 mb-3" style={{width:"400px"}}>
                        <h4 className='fw-semibold' >General Inquiries</h4>
                        <p className='text-muted fw-semibold fs-5 m-0'>Phone number</p>
                        <a href="tel:+91-8218660262" className='text-decoration-none fw-medium '>+91-8218660262</a>
                        <br />
                        <p className='text-muted fw-semibold fs-5 m-0'>Email</p>
                        <a href="mailto:info@fsu.edu.in" className='text-dark text-decoration-none fw-medium'>info@fsu.edu.in</a>
                    </div>
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default CardSection;