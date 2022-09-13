import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import './Apps.css';

AOS.init();

const Apps = () => {
    return (
        <div>
             <div className='full-container' style={{backgroundColor:'#0f0826'}}        >
                <div className='container' data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000" >
                        <div className="text-center pb-3 circle circle-3" >
                        <h1 className="text-design text-light">Best android app to <br/>
                            <span className='span-content'>learn programming</span>
                        </h1>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div>
                            <img className='img-fluid link-first' src="https://www.programming-hero.com/img/google-play.svg" alt=""/>
                        </div>
                        <div>
                            <img className='img-fluid' src="https://www.programming-hero.com/img/istore.svg" alt=""/>
                        </div>
                    </div>
                    {/* main-card-design */}
        {/* ---------------------------------------------- */}
                    <div className='pt-5 pb-5 ' style={{backgroundColor:'#0f0826'}}>
                    <div className='row'>
                        <div className="col-12 col-md-6 col-lg-6 col-lg-6">
                                <div className="card main-card " style={{backgroundColor:'#1f1248'}} data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <img className="card-img-top card-img" src="https://www.programming-hero.com/img/1m-banner.svg" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title text-center text-light pt-2 card-content">After learning each programming concept, you will add an element to</h4>
                                   <div className='img-container'>
                                      <img className="img-fluid second-img" src="https://www.programming-hero.com/img/dddd.png" alt=""/>
                                   </div>
                                </div>
                                </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-lg-6">
                            <div>
                            <div className="card main-card mb-4 p-3" style={{backgroundColor:'#1f1248'}} data-aos="zoom-in-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <img className="card-img-top" src="Rewards Badges" alt=""/>
                                <div className="card-body ">
                                    <h4 className="card-title  text-light heading">Rewards Badges</h4>
                                    <p className="text-light ">Our courses are gamified. you can earn superpowers, Surprise points and gifts for your enjoyable learning.</p>
                                    <img className='img-fluid' src="https://www.programming-hero.com/img/badges.png" alt=""/>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="card main-card thirdCard" style={{backgroundColor:'#1f1248'}} data-aos="zoom-out-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                    <div className="d-flex" style={{padding:'20px'}}>
                                        <div className='me-3 img-container'>
                                            <img className='img-fluid img-thirdCard ' src="https://www.programming-hero.com/img/coder.png" alt=""/>
                                        </div>
                                        <div className='text-light'>
                                            <h1 style={{ fontSize: "36px"}}>Offline Playground</h1>
                                            <p>You can get instant support from thousands of learners in the Forum</p>
                                        </div>
                                    </div>
                                        <img className="img-fluid last-img" src="https://www.programming-hero.com/img/phone-2.png" alt=""/>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
             </div>
    );
};

export default Apps;

