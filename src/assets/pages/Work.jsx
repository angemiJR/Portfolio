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
                                note="This project is a simple interactive game built
                                         with HTML, CSS, JavaScript, and React. It includes 
                                         user authentication with local storage, API integration
                                          for dynamic content, and is designed for larger 
                                          screens only. The game has been completely reconstructed 
                                          from the original, 
                                                enhancing both functionality and appearance."
                                img={Corgi}
                                url="https://game.njufkica.com/" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Work_chapter tittle="SPA website"
                                built_on="html, CSS"
                                note="This Spa-themed website was created
                                 as a two-person project and includes four 
                                 pages: Landing Page, About Us/Our Products, 
                                 Gallery, and Contact Us. It features hover 
                                 effects, navigation, form validation, 
                                and a consistent design."
                                img={Spa}
                                url="https://angemijr.github.io/wellness-site/index.html" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <Work_chapter tittle="CSS animation"
                                built_on="html, CSS"
                                note="This project is an animated event 
                                invitation website using HTML and CSS. 
                                It includes CSS transitions, keyframe animations,
                                 and an external animation library (Animate.css). 
                                 Additionally, it features at least two SVG graphics,
                                 one inline and one linked externally."
                                img={Animation}
                                url="https://angemijr.github.io/css_animation/" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Work_chapter tittle="Genesis website"
                                built_on="html, CSS, SaSS"
                                note="This project is a recreation of the Genesis 
                                portfolio Figma file using HTML and Sass. 
                                It consists of three linked pages with navigation."
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
