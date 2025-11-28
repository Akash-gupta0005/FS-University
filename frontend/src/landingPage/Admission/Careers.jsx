import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const slideStyles = {
    position: 'relative',
    width: '100%',
    height: '600px',
};

const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '1'
};

const textOverlayStyles = {
    position: 'relative',
    bottom: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    // textAlign: 'center',
    zIndex: 1,
};

// Slide data
const slides = [
    {
        image: '/media/assets/undergradute-admission-footer-bg.jpg',
    }
];
function Careers() {
    return (
        <ScrollAnimate>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper "
                style={{ height: '600px', padding: '0', marginTop: '1rem' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={slideStyles}>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={imageStyles}
                        />
                        <div style={textOverlayStyles}>

                            <div className="d-flex justify-content-around flex-wrap" id='careerText'>
                                <div>
                                <h1 style={{fontSize:'4rem',fontWeight:'700'}}>Building <br /> Global Careers</h1>
                                <p className='fw-semibold fs-4'>At FS University, we prepare you for:</p>
                                </div>
                                <div style={{width:'500px'}} id='career-box' className='bg-light p-5 rounded-1 fs-5'>
                                    <p style={{color:'#db0909ff', fontWeight:'500'}}>Admission Counselling</p>
                                    <p className='text-muted mb-0 fw-medium'>Phone</p>
                                    <a href="tel:+91-7900889820" className='text-decoration-none fw-semibold text-dark '>+91- 7900889820 &#124;</a>
                                    <span> | </span>
                                    <a href="tel:+91-9917286666" className='text-decoration-none fw-semibold text-dark '>9917286666 </a>
                                    <p className='text-muted mb-0 mt-3 fw-medium'>Email</p>
                                    <a href="mailto:admission@fsu.edu.in" className='text-decoration-none fw-semibold text-dark '>admission@fsu.edu.in</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
    );
}

export default Careers;