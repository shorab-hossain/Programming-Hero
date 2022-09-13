import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
// Import Swiper styles
import 'swiper/css';

const SliderCard = () => {

    SwiperCore.use([Autoplay])

    return (
        <div style={{backgroundColor:'#0f0826'}}>
           <div className='container full-sliderCard  pb-5 mx-auto pt-5 ' data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
                <div className='circle circle'>
                    
                </div>
                <div className='col-6 col-md-6 col-lg-6 col-sm-6 first-card '>
                    <div className='row img-sliderCard'>
                        <div>
                            <img className="img-fluid  first-img" src="https://www.programming-hero.com/img/live.svg" alt=""/>
                        </div>
                        <div>
                            <img className="img-fluid" src="https://www.programming-hero.com/img/3x.svg" alt=""/>
                        </div>
                  </div>
                     <h3 className='text-light' style={{fontSize:'36px'}}>Live support <span  style={{color:'#aa9bfc'}}>sessions</span> <br/> three times in a day <span  style={{color:'#aa9bfc'}}>to<br/>solve your coding related <br/>issues.</span></h3>
                 </div>
                {/* second-card-design */}
                <div className='col-6 col-md-6 col-lg-6 col-sm-6 bg-success second-sliderCard'>
                   <h3 className='sliderCard-title'>Build 11 professional projects while learning.
                    </h3>   
                    <p className='sliderCard-small'>Build real-world projects while learning and get international job-placement service</p>
                    {/* card-slider-design */}
                    <div className='pt-4'>
                    <Swiper
                    
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay:3000
                        }}
                        >
                        <SwiperSlide>
                            <img className="img-fluid" src="https://www.programming-hero.com/img/assignment/assignment-1.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid" src="https://www.programming-hero.com/img/assignment/assignment-1.pngv" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                             <img className="img-fluid" src="https://www.programming-hero.com/img/assignment/assignment-3.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                         <img className="img-fluid" src="https://www.programming-hero.com/img/assignment/assignment-5.png" alt=""/>
                        </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SliderCard;