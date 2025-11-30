import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const slideStyles = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    minHeight: '600px',
    '@media (max-width: 580px)': {
        minHeight: '400px'
    }
};

const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0.75',
    display: 'block'
};

const textOverlayStyles = {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    zIndex: 2,
    padding: '1rem',
    paddingBottom: '0',
    marginBottom: '0',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textShadow: '-3px 5px 8px black'
};

// Slide data
const slides = [
    {
        image: 'media/assets/Generated-Image-March-28-2025-5_59PM.jpeg',
    }
];
function Placement() {
    return (
        <ScrollAnimate>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper"
                style={{ minHeight: '600px', padding: '0', position: 'relative' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={slideStyles}>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={imageStyles}
                        />
                        <div className='d-flex flex-wrap justify-content-center align-items-center flex-warp' style={textOverlayStyles}>
                            <h1 className='fw-bolder' style={{ fontSize: '3.5rem ' }}>Training & Placement</h1>
                            <p className='fs-3 text-center my-4'>
                                A Unique corporate resource center facilitates excellent Training & Placements
                            </p>
                            <button className='btn rounded-2 fs-3 fw-medium text-light p-2 mt-3' style={{backgroundColor:'#9d2235'}} >
                                Know More
                            </button>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>

        </ScrollAnimate>
    );
}

export default Placement;