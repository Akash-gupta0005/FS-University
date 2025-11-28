// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';

// Custom styles
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
        image: '/media/assets/IMGL9402.jpg',
        title: 'CAMPUS LIFE',
        subtitle: 'A thriving residential campus and community of creative and accomplished people from around the world',
    },
    {
        image: '/media/assets/FS-University-Best-Private-University-in-shikohabad-Firozabad-12.jpg',
        title: 'CAMPUS LIFE',
        subtitle: 'A thriving residential campus and community of creative and accomplished people from around the world',
    },
    {
        image: '/media/assets/FS-University-Best-Private-University-in-shikohabad-Firozabad-42.jpg',
        title: 'CAMPUS LIFE',
        subtitle: 'A thriving residential campus and community of creative and accomplished people from around the world',
    }
];

export default function HeroSection() {
    return (
        <ScrollAnimate>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: 'min(80vh, 700px)', padding: '0' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={slideStyles}>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={imageStyles}
                        />
                        <div className='d-flex flex-column mb-3 justify-content center' style={textOverlayStyles}>
                            <a href="https://youtu.be/XHFfNcDZFPo" target='_main' className='text-decoration-none text-dark'>
                            <i className="fa-regular fa-circle-play fa-shake m-auto mb-2" style={{color:'whitesmoke', fontSize:'5rem'}}></i>
                            </a>
                            <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem',textShadow: '2px 2px 4px rgba(146, 18, 18, 0.98)'}}>
                                {slide.title}
                            </h1>
                            <p style={{ fontSize: '2rem' }}>
                                {slide.subtitle}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
    );
}
