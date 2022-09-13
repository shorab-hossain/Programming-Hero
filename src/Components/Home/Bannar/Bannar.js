import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg1 from '../../../Img/banner-phone.png';
import './Bannar.css';

AOS.init()



const Bannar = () => {
    
    SwiperCore.use([Autoplay])

    return (
        <div  style={{backgroundColor:'#0f0826'}}>
             <div className="container">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay:3000
                        }}
                        >
                        <SwiperSlide>
                          <div className='main-section' >
                            <div className='row container main-slider'>
                                    <div className='col-12 col-md-6 col-sm-6 col-xl-6  text-wrapper' data-aos="fade-right"
                                     data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <h1><span className="main">Programming </span><br/> <span className="second-content">Just Got Fun</span></h1>
                                     <p className='small-content'>Personalized, fun, and interactive learning process. Enjoy our gamified courses to master python, mobile app development, cyber security, C programming, C++, and many more.</p>
                                      <button className='btn btn-primary mt-4 bannar-btn' type="submit">
                                     <Link to="" className='btn-design' >Explore Now <FaAngleRight className='myIcon'/></Link>
                                    </button>
                                    </div>
                                     <div className='col-12 col-md-6 col-sm-6 col-xl-6 img-slider'  data-aos="fade-left"
                                     data-aos-easing="ease-out-cubic"
                                     data-aos-duration="1000"
                                            >
                                     <img className="img-fluid" src={sliderImg1} alt=""/>
                                    </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='main-section'  style={{backgroundColor:'#0f0826'}}>
                        <div className='row container main-slider'>
                                <div className='col-12 col-md-6 col-sm-6 col-xl-6  ' data-aos="fade-right"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000">
                                    <h1 className='slider-content'><span className="main ">Learn Web </span><span className='text-light'>Development to get a job</span></h1>
                                    <p className='small-content mt-3'> Come and enjoy unlimited coding support, daily concept clear sessions, 
                                     real-world projects, 
                                     job placement service,
                                    and many more. And 
                                     70% of our successful 
                                     students get hired 
                                    internationally.</p>
                                     <button className='btn btn-primary mt-4 bannar-btn' type="submit">
                                    <Link to="" className='btn-design' >Explore Now <FaAngleRight className='myIcon'/></Link>
                                        </button>
                                </div>
                                 <div className='col-12 col-md-6 col-sm-6 col-xl-6 img-slider'  data-aos="fade-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="1000"
                                        >
                                <img className="img-fluid" src='https://www.programming-hero.com/img/employer.svg' alt=""/>
                                </div>
                        </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='main-section'  style={{backgroundColor:'#0f0826'}}>
                        <div className='row container main-slider'>
                            <div className='col-12 col-md-6 col-sm-6 col-xl-6  ' data-aos="fade-right"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1000">
                             <h1 className='slider-content'><span className="main">Explore : Find the </span><span className="text-light">Perfect match for your team</span></h1>
                             <p className='small-content mt-3'>Need a smart Developer? Hire extremely hardworking, quick learners and ready to contribute. We trained them months after months to build the growth and learning mindset in them.</p>
                             <button className='btn btn-primary mt-4 bannar-btn' type="submit">
                              <Link to="" className='btn-design' >Explore Now <FaAngleRight className='myIcon'/></Link>
                                </button>
                                </div>
                                 <div className='col-12 col-md-6 col-sm-6 col-xl-6 img-slider'  data-aos="fade-left"
                                data-aos-easing="ease-out-cubic"
                                 data-aos-duration="1000"
                                        >
                                <img className="img-fluid" src='https://www.programming-hero.com/img/startup.svg' alt=""/>
                                </div>
                        </div>
                        </div>
                        </SwiperSlide>
                        ...
                        </Swiper>
             </div>
        </div>
    );
};

export default Bannar;