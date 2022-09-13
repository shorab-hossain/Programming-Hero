import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../Img/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nabar-item" style={{backgroundColor:'#0f0826',padding: "15px 0px"}}>
           <nav className="navbar navbar-expand-lg navbar-light container " >
            <Link className="navbar-brand text-light" to="/https://www.programming-hero.com/">
                <img className='img-fluid' src={logoImg} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon-toggle"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto main-item" >
                <li className="nav-item active">
                    <Link className="nav-link content" to="/home">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/apps">Apps</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/courses">Courses</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/hireForm">Hire Form</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/contract">Contract</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/career">Career</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;