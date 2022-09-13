import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './TalentCanditate.css';

AOS.init();

const TalentCanditate = () => {
    return (
        <div className="pb-5" style={{backgroundColor:'#0f0826'}}>
            <div className="container">
                <h2 className='talentTitle text-center text-light'>Find best talented candidate</h2>
                <div className='talentBtn'>
                    <button className='btn btn-primary mt-4 bannar-btn' type="submit">
                     <Link to="" className='btn-design' >SuccessFull student<FaAngleRight className='myIcon'/></Link>
                    </button>
                </div>
                <div className='d-flex pt-5'>
                    <div className='col-md-7 col-sm-7 col-lg-7 col-12 '>
                       <div className='d-flex justify-center align-items-center pt-4 pb-4  card-slider mb-5' data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                            <div className="main-SliderImg">
                                <img className='img-fluid me-3 left-SliderImg' src="https://www.programming-hero.com/img/guides.png" alt=""/>
                            </div>
                            <div className="text-light">
                                <h3>Candidate Guides</h3>
                                <p>We shortlist and pre-assess resumes and candidates based on your unique needs.</p>
                            </div>
                       </div>
                       <div className="d-flex justify-center align-items-center pt-4  pb-4  card-slider mb-5" data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                       <div className="me-3 main-SliderImg">
                                <img className="img-fluid left-SliderImg" src="https://www.programming-hero.com/img/developer.png" alt=""/>
                            </div>
                            <div className="text-light">
                                <h3>
                                    Futuristic Developer</h3>
                                <p>Hire energetic Developers who are challenge takers and a quick learner.</p>
                            </div>
                       </div>
                    </div>
                    <div className='col-md-5 col-sm-5 col-lg-5 col-12 '>
                        <div className='text-light p-5 card-slider' data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                            <img className="img-fluid main-imgDesign mb-3" src="https://www.programming-hero.com/img/productive.png" alt=""/>
                            <h3>Productive team</h3>
                            <p>Build high performing teams crafted just for you with the right fit for your specific requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentCanditate;