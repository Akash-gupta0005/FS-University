import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ScrollAnimate from '../../../ScrollAnimate.jsx';
import '../../../effect.css';

export default function Visit() {
  return (
    <ScrollAnimate >
      <h1 className='text-center fw-bolder text-decoration-underline mt-4'>Visiting FS University</h1>
      <p className='fw-semibold text-center px-5 pt-4' style={{ fontSize: '1.1rem', color: '#696969' }}>We, at FS University offer various Undergraduate, Postgraduate and Doctorate Programs which are benchmarked with best curriculum available globally. These programs are equipped with qualified faculty, skilled staff and well-equipped labs as required.</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 80,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-1-600x400.jpg' />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-3-600x400.jpg'
             />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-4-600x400.jpg' />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-5-600x400.jpg' />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-6-600x400.jpg' />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-8-600x400.jpg' />
          </SwiperSlide>
          <SwiperSlide style={{flexShrink:'1'}}>
            <img src='/media/assets/fs-university-about-us-gallery-9-600x400.jpg' />
          </SwiperSlide>
      </Swiper>
    </ScrollAnimate>
  )
}