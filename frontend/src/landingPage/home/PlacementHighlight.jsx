import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Highlights() {
    return (
        <ScrollAnimate>

            <div style={{ background: 'linear-gradient(180deg, #8f0a0ac0 20%, #2c2a2aff 80%)' }}>
                <h1 className='fw-semibold text-light text-center py-1' style={{ fontSize: '3.5rem ' }}>Placement Highlights</h1>
                <div className='d-flex flex-wrap justify-content-center align-items-center flex-warp'>
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div>
                            <SwiperSlide className='text-center'><img src="\media\assets\WhatsApp-Image-2025-04-06-at-16.58.47-1-768x1155.jpeg" id='placementImg'  /></SwiperSlide>
                            <SwiperSlide className='text-center'><img src="\media\assets\WhatsApp-Image-2025-04-06-at-16.58.47-768x1155.jpeg" id='placementImg'  /></SwiperSlide>
                        </div>
                    </Swiper>
                    <div className='d-flex flex-column justify-content-center text-light'>
                        <h1 className='fw-semibold text-center'>1,000+</h1>
                        <p className='text-center fs-4 mb-3'>Placement Offers for Previous Batch</p>
                        <h1 className='fw-semibold text-center'>50+</h1>
                        <p className='text-center fs-4 mb-3'>Global Recruiters from Diverse Domains</p>
                        <h1 className='fw-semibold text-center'>19 LPA</h1>
                        <p className='text-center fs-4 mb-3'>Highest CTC</p>
                        <h1 className='fw-semibold text-center'>3.5 LPA</h1>
                        <p className='text-center fs-4 mb-3'>Average CTC</p>
                        <h1 className='fw-semibold text-center'>2.5 LPA</h1>
                        <p className='text-center fs-4 mb-3'>Minimum CTC</p>

                    </div>
                </div>
            </div>
        </ScrollAnimate >
    );
}

export default Highlights;