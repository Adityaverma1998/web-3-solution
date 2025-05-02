'use client'
import React from 'react';
import styles from '@/components/portfolio/portfolio.module.css';
import ProjectElement from '@/components/elements/project-element';
import { projects } from '@/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const responsive = {
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

const MobilePortfolio: React.FC = () => {
    return (
        <div className={'w-full relative portfolio-gradient mobile-portfolio'}>
            <Swiper slidesPerView={1} autoHeight={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper">
                {projects.map((project, index) => (
                    <SwiperSlide>
                        <div style={{ paddingBottom: '48px', paddingTop: '25px' }}>
                            <div key={index} className={styles.mobileSlide}>
                                <div className={styles.mobilePhoto}>
                                    <ProjectElement project={project}/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/*<Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {projects.map((project, index) => (
                    <div key={index} className={styles.mobileSlide}>
                        <div className={styles.mobilePhoto}>
                            <ProjectElement project={project} />
                        </div>
                    </div>
                ))}
            </Carousel>*/}
        </div>
    );
};

export default MobilePortfolio;
