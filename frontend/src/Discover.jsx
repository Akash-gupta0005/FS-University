import React from 'react'
import ScrollAnimate from './ScrollAnimate';
import './effect.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import './landingPage/home/InfoTab/Info.css';

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
        image: '/media/assets/FS-univeristy-background.jpg',
    }
];
function Discover() {
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
                        <div style={textOverlayStyles} id='discover_text'>

                            <div className="d-flex justify-content-evenly flex-wrap">
                                <div id='box' className='bg-light p-3 rounded-2 text-dark text-center'>
                                    <h1 className='fw-semibold'>Contact</h1>
                                    <a href="tel:+91-7900889820" className='text-decoration-none fs-5'>+91-7900889820</a>
                                    <br />
                                    <a href="tel:+91-9917286666" className='text-decoration-none fs-5'>+91-9917286666</a>
                                </div>
                                <div id='box' className='bg-light p-3 rounded-2 text-dark text-center'>
                                    <h1 className='fw-semibold'>Address</h1>
                                    <p className='fs-5'>NH 19, Agra Road, Near Balaji Mandir,<br />
                                        Shikohabad, Firozabad,<br />
                                        Uttar Pradesh – 283135
                                    </p>
                                </div>
                                <div id='box' className='bg-light p-3 rounded-2 text-dark text-center'>
                                    <h1 className='fw-semibold'>Email</h1>
                                    <a href="mailto:info@fsu.edu.in" className='text-black text-decoration-none fs-5 '>info@fsu.edu.in</a>
                                    <br />
                                    <a href="mailto:admission@fsu.edu.in" className='text-decoration-none text-black fs-5'>admission@fsu.edu.in</a>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h1 className='fw-bolder my-5'>
                                    Discover the right program for you.
                                </h1>
                                <button type="button" className="btn btn-danger p-2 fs-5 text-light fw-bolder">Get in Touch</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
    );
}

export default Discover;