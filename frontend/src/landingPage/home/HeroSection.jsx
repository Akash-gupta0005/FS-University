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
        image: '/media/assets/fs1-1.jpg',
        title: 'WELCOME TO FS UNIVERSITY',
        subtitle: 'A place with diverse nationalities, cultures and ideas',
    },
    {
        image: '/media/assets/fs4-1.jpg',
        title: 'EXCELLENCE IN EDUCATION',
        subtitle: 'Discover Your Potential Now',
    },
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
                        <div style={textOverlayStyles}>

                            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.05, textShadow: '2px 2px 4px rgba(146, 18, 18, 0.98)' }}>
                                {slide.title}
                            </h1>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', margin: 0, textShadow: '2px 2px 4px rgba(146, 18, 18, 0.98)', fontWeight:600, fontStyle:'oblique' }}>
                                {slide.subtitle}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ScrollAnimate>
    );
}
