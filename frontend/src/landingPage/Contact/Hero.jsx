import React from 'react'
import ScrollAnimate from '../../ScrollAnimate'
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
    opacity: '0.75'
};

const textOverlayStyles = {
    position: 'relative',
    bottom: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
};

// Slide data
const slides = [
    {
        image: '/media/assets/contact-title-bar-bg.jpg',
    }
];

function Hero() {
    return ( 
        <ScrollAnimate>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper "
                style={{ height: '500px', padding:'0' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={slideStyles}>
                        <img
                            src={slide.image}
                            style={imageStyles}
                        />
                        <div className='container p-3 ms-3' style={textOverlayStyles}>
                            <div className="row p-3">
                                <h1 className='text-center mb-5 fw-bolder' style={{ fontSize: '5rem', textShadow: '2px 2px 4px rgba(146, 18, 18, 0.98)' }}>Contact Us</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
     );
}

export default Hero;