import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Companies() {
    return (
        <>
        
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
                <div className='d-flex justify-content-center align-items-center'>
                    <SwiperSlide className='text-center'><img src="\media\assets\Lucky.png"  />
                        <img src="\media\assets\tcs-1.png"  />
                        <img src="\media\assets\Mahindra-300x167.png"  />
                        <img src="\media\assets\HDFC-300x167.png"  /></SwiperSlide>
                    <SwiperSlide className='text-center'><img src="\media\assets\BIO.png"  />
                        <img src="\media\assets\decathalon-300x167.png"  />
                        <img src="\media\assets\fortune.png"  />
                        <img src="\media\assets\asian-paints-300x167.png"  /></SwiperSlide>
                </div>
            </Swiper>
        </>
    );
}
