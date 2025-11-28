import React from 'react'
import ScrollAnimate from './ScrollAnimate';
import './effect.css'
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
    opacity: '0.95',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

// Slide data
const slides = [
    {
        image: '/media/assets/footer-bg.jpg',
    }
];
function Footer() {
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
                        <div className='container' id='footBox' style={textOverlayStyles}>
                            <div className="row g-2 g-md-3">
                                <div className="col-12 col-sm-6 col-md-3 text-center text-md-start py-3 py-md-5">
                                    <img src="media/assets/fs-university-logo.png" alt="logo" style={{ width: '90%', maxWidth: '180px', padding: '0.5rem' }} />
                                    <p style={{ marginTop: '10px', fontSize: '18px' }}>50 National and International Academics Tie-ups, FS University bagged various prestigious awards such as Fastest Growing University in Uttar Pradesh 2022 and Most Emerging and Promising University 2021.</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 py-3 py-md-5">
                                    <p className='fw-bolder' style={{ fontSize: '18px' }}>Social Media</p>
                                    <div className="d-flex flex-column justify-content-center justify-content-md-start gap-3 flex-wrap">
                                        <a href="https://www.facebook.com/fsuedu" className='text-decoration-none text-light'><i className="fa-brands fa-facebook fa-shake" style={{ fontSize: '1.8rem', color: '#0846f1ff' }}></i>Facebook</a>
                                        <a href="https://www.instagram.com/fsuedu.in/?utm_medium=copy_link" className='text-decoration-none text-light'><i className="fa-brands fa-instagram fa-shake" style={{ fontSize: '1.8rem', color: '#d20f2c' }}></i>Instagram</a>
                                        <a href="https://www.youtube.com/channel/UC2oEHAUkdADjxfJraVMu43g" className='text-decoration-none text-light'><i className="fa-brands fa-youtube fa-shake" style={{ fontSize: '1.8rem', color: '#d20' }}></i>YouTube</a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 text-light py-3 py-md-5">
                                    <p className='fw-bolder' style={{ fontSize: '18px' }}>Quick Links</p>
                                    <div style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                        <a href="#" className='text-decoration-none text-light d-block'>About us</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>Placement</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>International</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>Contact</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>Careers</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>Grievance Portal</a>
                                        <a href="#" className='text-decoration-none text-light d-block'>Portal</a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 text-light py-3 py-md-5">
                                    <p className='fw-bolder' style={{ fontSize: '18px' }}>Location</p>
                                    <p className='text-light' style={{ fontSize: '16px', lineHeight: '1.6' }}>NH 19, Agra Road, Near Balaji Mandir, Shikohabad, Firozabad, Uttar Pradesh – 283135</p>
                                    <a href="https://www.google.com/maps/place/FS+University+Shikohabad/@27.120256,78.5597294,15z/data=!4m6!3m5!1s0x3974494f626c7c95:0xa567fe16719d8739!8m2!3d27.120256!4d78.5597294!16s%2Fg%2F11j7y_x5fy?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                                        <button type="button" className="btn btn-danger btn-md">Get direction</button>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-3 mt-md-4 text-light" style={{ fontSize: '0.8rem' }}>
                                <hr style={{ margin: '0.5rem 0' }} />
                                <p className='text-center fw-bolder mt-3     mt-md-4' style={{ fontSize: '16px', lineHeight: '1.4' }}>&copy; 2025 FS University. All Rights Reserved. Developed with &#10084; by Akash Gupta </p>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
    );
}

export default Footer;