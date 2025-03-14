import '../styles/Work.css';
import '../styles/Common.css';

import Work_chapter from '../components/Work_chapter.jsx';
import Chapter from '../components/Chapter_right.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Corgi from '../pictures/Work_corgi.svg';

const chapterText = "My work";

function Work() {
    return (
        <>
            <div className='chapter_right'>
                <Chapter text={chapterText} />
            </div>

            <div className="container5">
            <div className='carousel-container'>
                <Swiper
                    effect="coverflow"
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        scale: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        type: "bullets",
                        dynamicBullets: true,
                        dynamicMainBullets: 3
                    }}
                    
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <Work_chapter tittle="Memory game" 
                                        built_on="React, JavaScript, html, CSS" 
                                        note="Started as a group project but comletley change it" 
                                        img={Corgi}
                                        url="https://game.njufkica.com/" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work_chapter />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work_chapter />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work_chapter />
                    </SwiperSlide>
                </Swiper>
            </div>

            </div>
        </>
    );
}

export default Work;
