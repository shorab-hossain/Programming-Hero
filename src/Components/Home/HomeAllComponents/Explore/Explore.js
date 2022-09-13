import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Explore.css';

AOS.init();

const Explore = () => {
    return (
            <div className="pb-5" style={{backgroundColor:'#0f0826'}} >
            <div className='container' data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" >
            <div className="text-center pb-5  pt-5" >
                        <h2 className="content-text text-light"><span className="text-design">Complete guideline</span> from absolute <br/>
                        beginners to getting hired.
                        </h2>
                    </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                    <button className='btn btn-primary mt-4 bannar-btn ' type="submit">
                     <Link to="" className='btn-design '  >Explore Now <FaAngleRight className='myIcon'/></Link>
                    </button>
                    </div>
                    <div>
                    <button className='btn btn-primary mt-4 bannar-btn' type="submit">
                     <Link to="" className='btn-design' >Hired List <FaAngleRight className='myIcon'/></Link>
                    </button>
                    </div>
                </div>
                {/* explore-bannar-design */}
                <div>
                    <div className='Explore-Card row' style={{backgroundColor: "#211548",
                borderRadius: '18px'}} data-aos="flip-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 left-blog">
                            <img className="img-fluid" src="https://www.programming-hero.com/img/course-thumbnails.png" alt=""/>
                        </div>
                        <div className='col-12 col-sm-8 col-md-8 col-lg-8 right-blog'>
                          <div className='my-content'>
                          <h3>Complete Web Development Course
                                with Jhankar Mahbub</h3>
                                <p>Enjoy the most effective and enjoyable journey with interactive lessons and guided support to become a web developer.</p>
                          </div>
                            <div className="second-section mb-3">
                                    <div className='d-flex justify-content-center align-aligns-center small-wrapper'>
                                        <div className='firstImg'>
                                            <img className='img-fluid img-explore ' src="https://www.programming-hero.com/img/course/users.png" alt=""/>
                                        </div>
                                        <div className='text-light content-wrapper' id='enrolled'>
                                            <h4>10K+</h4>
                                            <p>Enrolled</p>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='d-flex img-wrapper me-3'>
                                        <div>
                                            <img className='img-fluid second' src="https://www.programming-hero.com/img/course/rating.png" alt=""/>
                                        </div>
                                        <div className='text-light content-wrapper'>
                                            <h3>1k</h3>
                                            <p>Got Hired</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className='d-flex last-wrapper'>
                                        <div>
                                            <img className='img-fluid img-explore ms-2' src="https://www.programming-hero.com/img/course/calendar.png" alt=""/>
                                        </div>
                                        <div className='text-light content-wrapper'>
                                            <h3>5</h3>
                                            <p>Month Required</p>
                                        </div>
                                    </div>  
                                    </div>
                            </div>
                            {/* last-img-content */}
                            <div className='last-section'>
                                <div className='d-flex firstly style-explore '>
                                    <div>
                                        <img className="img-fluid explore-imgStyle" src="https://www.programming-hero.com/img/info1.png" alt=""/>
                                    </div>
                                    <div className='smallWrapper'>
                                        <small>800+ video</small>
                                    </div>
                                </div>
                                <div className='d-flex firstly style-explore '>
                                    <div>
                                        <img className="img-fluid" src="https://www.programming-hero.com/img/info2.png" alt=""/>
                                    </div>
                                    <div className='smallWrapper'>
                                        <small>70+ Quizzes</small>
                                    </div>
                                </div>
                                <div className='d-flex firstly style-explore '>
                                    <div>
                                        <img className="img-fluid" src="https://www.programming-hero.com/img/info3.png" alt=""/>
                                    </div>
                                    <div className='smallWrapper'>
                                    <small> 12 Assignments</small>
                                    </div>
                                </div>
                                <div className='d-flex firstly style-explore '>
                                    <div>
                                        <img className="img-fluid" src="https://www.programming-hero.com/img/offline.png" alt=""/>
                                    </div>
                                    <div className="smallWrapper">
                                   <small> Offline Download</small>
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

export default Explore;