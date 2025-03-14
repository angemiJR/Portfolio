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
import Spa from '../pictures/Serenity.png';
import Animation from '../pictures/Animation.svg';
import Sass from '../pictures/Sass.svg';

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
                        <Work_chapter tittle="Wellness and SPA website" 
                                        built_on="html, CSS" 
                                        note="Started as a group project but comletley change it" 
                                        img={Spa}
                                        url="https://angemijr.github.io/wellness-site/index.html" />
                    </SwiperSlide>
                    <SwiperSlide>

                        <Work_chapter tittle="Windmill animation" 
                                        built_on="html, CSS" 
                                        note="Started as a group project but comletley change it" 
                                        img={Animation}
                                        url="https://angemijr.github.io/css_animation/" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Work_chapter tittle="Genesis website" 
                                        built_on="html, CSS, SaSS" 
                                        note="Started as a group project but comletley change it" 
                                        img={Sass}
                                        url="https://angemijr.github.io/SASS/index.html" />
                    </SwiperSlide>
                </Swiper>
            </div>

            </div>
        </>
    );
}

export default Work;
