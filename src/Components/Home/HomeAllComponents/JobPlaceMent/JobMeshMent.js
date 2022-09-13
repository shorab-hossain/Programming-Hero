import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import './JobPlaceMent.css';

AOS.init();

const JobMeshMent = () => {
    return (
        <div className="pb-5" style={{backgroundColor:'#0f0826'}}>
        <div className="container">
              <h2 className='talentTitle text-center text-light'>Job placement success</h2>
             <div className="d-flex justify-content-center align-items-center pt-5">
             <div className="col-md-4 col-lg-4 col-sm-4 col-12 d-flex justify-content-center align-items-center"  data-aos="fade-right"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
                 <div className='job-img'>
                    <img className='img-fluid' src="https://www.programming-hero.com/img/job.png" alt=""/>
                 </div>
                </div>
                {/* left-card-end */}
                <div className="d-flex justify-content-center   align-items-center col-md-8 col-sm-8 col-lg-8 col-12">
                    {/* first-card */}
                    <div className='col-md-4 col-sm-4 col-lg-4 col-12 p-4 flex-card1'                           id="second-img"                                           data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" >
                        <div className="d-flex justify-content-center align-items-center mb-3">
                             <img className="img-fluid" src="https://www.programming-hero.com/img/file.png" alt=""/>
                        </div>
                        <div className="text-center text-light">
                        <h3>1000+</h3>
                        <p>Job placement worldwide</p>
                        </div>
                     </div>
                     {/* double-card */}
                        <div className="col-md-4 col-sm-4 col-lg-4 col-12">
                            <div className="flex-card1 mb-4" data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" >
                                    <div className='d-flex justify-content-center align-items-center mb-3'>
                                     <img className="img-fluid" src="https://www.programming-hero.com/img/document.png" alt=""/>
                                    </div>
                                    <div className="text-center text-light">
                                    <h3>500+</h3>
                                    <p>Connected companies</p>
                                    </div>
                                </div>
                            <div className="flex-card1" data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                                  <div className="text-center text-light">
                                    <div className='d-flex justify-content-center align-items-center mb-3'>
                                         <img className='img-fluid' src="https://www.programming-hero.com/img/users.png" alt=""/>
                                    </div>
                                    <h3>12+</h3>
                                    <p>Dedicated
                                    Job Placement Manager</p>
                                    </div>
                            </div>
                        </div>
                 
                </div>
             </div>
              </div>
        </div>
    );
};

export default JobMeshMent;