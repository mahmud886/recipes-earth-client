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
                        src='https://images.unsplash.com/photo-1516001784377-938d72d1e4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1530536476203-d77e573bc524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1484412509196-57eda96981e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1560713781-d00f6c18f388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1625631980820-fbdc8ca2e902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSlider;
