import React from 'react';
import Apps from './Apps/Apps';
import Bannar from './Bannar/Bannar';
import Career from './Career/Career';
import Contract from './Contract/Contract';
import Coures from './Courses/Coures';
import HireForm from './HireForm/HireForm';
import './Home.css';
import Explore from './HomeAllComponents/Explore/Explore';
import SliderCard from './HomeAllComponents/Explore/SliderCard';
import TalentCanditate from './HomeAllComponents/TalentantCanditate/TalentCanditate';

const Home = () => {
    return (
        <div className="home-section">
             <Bannar></Bannar>
            {/* viewer-design */}
            <div className="pb-5" style={{backgroundColor:'#0f0826'}}>
               <div className="full-section container" data-aos="fade-up"
                     data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                 <div className="inner-design col-md-3 text-center  mb-3 col-lg-3">
                       <div>
                       <img className='img-fluid img-design' src="https://www.programming-hero.com/img/1m.svg" alt=""/>
                       </div>
                        <div>
                        <h3 className='text-light pt-2'>Users</h3>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3 col-sm-6 mb-3 col-6 col-lg-3">
                      <div>
                         <img className='img-fluid img-design' src="https://www.programming-hero.com/img/ratings.svg" alt=""/>
                      </div>
                        <div>
                        <h3 className='text-light pt-2'>PlayStore Rating</h3>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3  mb-3 col-lg-3">
                       <div>
                        <img className='img-fluid img-design' src="https://www.programming-hero.com/img/code.svg" alt=""/>
                       </div>
                        <div>
                        <h3 className='text-light pt-2'>Code.org win</h3>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3 col-sm-6 mb-3 col-6 col-lg-3">
                     <div>
                     <img className="img-fluid img-design" src="https://www.programming-hero.com/img/review.svg" alt=""/>
                     </div>
                       <div>
                       <h3 className='text-light pt-2'>Review</h3>
                       </div>
                    </div>
               </div> 
              
            </div>
            {/* end of our review section */}
            {/* ---------------------------------
            {/* app-section design home-page */}
            
              {/* all-components */}
              {/* --------------------------------------- */}
               <div>
                 <Apps></Apps>
               </div>
                <div>
                  <Explore></Explore>
                </div>
                <div>
                  <SliderCard></SliderCard>
                </div>
                <div>
                  <TalentCanditate></TalentCanditate>
                </div>
                <Coures></Coures>
                <HireForm></HireForm>
                <Contract></Contract>
                <Career></Career>
        </div>

    );
};

export default Home;