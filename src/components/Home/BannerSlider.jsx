import React from 'react';
import './Home.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
const BannerSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
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
                className='mySwiper'>
                <SwiperSlide>
                    <img
                        src='https://i.ibb.co/WfcbwTc/Recipes-Earth-Slider-1.png'
                        alt='Slider1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://i.ibb.co/zSj83Mr/Recipes-Earth-Slider-2.png'
                        alt='Slider2'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://i.ibb.co/1MrzpXY/Recipes-Earth-Slider-3.png'
                        alt='Slider3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://i.ibb.co/WVLfGj6/Recipes-Earth-Slider-4.png'
                        alt='Slider4'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://i.ibb.co/rZH0Stk/Recipes-Earth-Slider-5.png'
                        alt='Slider5'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSlider;
