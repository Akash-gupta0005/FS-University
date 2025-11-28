import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const slideStyles = {
    position: 'relative',
    width: '100%',
    height: 'min(80vh, 700px)',
};

const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.95,
    display: 'block',
};

const textOverlayStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    zIndex: 2,
    padding: 'clamp(1rem, 4vw, 4rem)',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};
// Slide data
const slides = [
    {
        image: '/media/assets/about-fs-university-slide2.jpg',
    }
];

function HeroImg() {
    return ( 
        <ScrollAnimate>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper "
                style={{ height: '500px', padding: '0' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={slideStyles}>
                        <img
                            src={slide.image}
                            style={imageStyles}
                        />
                         <div className='d-flex flex-column mb-3 justify-content center' style={textOverlayStyles}>
                            <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem',textShadow: '2px 2px 4px rgba(146, 18, 18, 0.98)' }}>
                                ABOUT FS 
                            </h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
     );
}

export default HeroImg;