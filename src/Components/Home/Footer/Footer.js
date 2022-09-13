import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../../Img/facebook.png';
import instragramIcon from '../../../Img/Instagram.png';
import linkDinIcon from '../../../Img/linkdin.png';
import whatsappIcon from '../../../Img/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="pb-5 main-container" style={{backgroundColor:'#0f0826'}}>
           <div className='d-flex  justify-space-between align-items-center container footer-container'>
                <div className='col-md-6 col-sm-6 col-md-6 col-12 text-light'>
                    <Link to="/"><img className='img-fluid mb-3' src="https://www.programming-hero.com/img/logo.png" alt=""/></Link>
                    <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p>Support: support@programming-hero.com</p>
                    <p> (Available : 10:00am to 07:00pm)</p>
                </div>
                <div className='col-md-3 col-sm-3 col-md-3 col-12 footer-link'>
                    <Link to="">Home</Link><br/>
                    <Link to="">About us</Link><br/>
                    <Link to="">Success Page</Link><br/>
                    <Link to="">Terms and condition</Link>
                </div>
                <div className='col-md-3 col-sm-3 col-md-3 col-12 footer-iconDesign'>
                        <h4>Follow us</h4>
                        <div className='d-flex justify-space-between align-items-center'>
                            <div className='footer-icon'>
                                <Link to="">
                                    <img className="img-flluid" src={facebookIcon} alt=""/>
                                </Link>
                            </div>
                            <div className='footer-icon'>
                                  <Link to="">
                                  <img className="img-flluid " src={linkDinIcon} alt=""/>
                                  </Link>
                            </div>
                            <div className='footer-icon' >
                                 <Link to="">
                                 <img className="img-flluid " src={whatsappIcon} alt=""/>
                                 </Link>
                            </div>
                            <div className='footer-icon'>
                                <Link to="">
                                <img className="img-flluid " src={instragramIcon} alt=""/>
                                </Link>
                            </div>
                        </div>
                </div>
           </div>
           <p className="text-center text-light">Copyright © 2022 <span className='text-danger ms-3'>Shorab Hossain</span></p>
        </div>
    );
};

export default Footer;