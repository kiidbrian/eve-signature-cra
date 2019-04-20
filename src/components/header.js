//import libraries
import React from 'react';
import {Link} from 'react-router-dom';

// create a functional component
const Header = (props) => {
    return (
        <React.Fragment> 
            <header id="pagetop">
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo page-scroll"><a href="/"><img style={{width:'90px'}} src={process.env.PUBLIC_URL + "/images/logo_clean.jpeg"} alt="logo" /></a></div>
                                <div className="mm-toggle-wrap">
                                    <div className="mm-toggle"> <i className="icon-menu"><img src={process.env.PUBLIC_URL + "/images/menu-icon.png"} alt="Menu" /></i></div>
                                </div>
                                <ul className="menu">
                                    <li className="page-scroll"><a href="#salon">The Salon</a></li>
                                    <li className="page-scroll"><a href="#ourteam">Chief Stylist</a></li>
                                    <li className="page-scroll"><a href="#services">Our Services</a></li>
                                    <li className="page-scroll"><a href="#appoinment">appointment</a></li>
                                    <li className=""><Link to="/works">Our Works</Link></li>
                                    <li><Link to="/reviews">Reviews</Link></li>
                                    <li className="page-scroll"><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
};

export default Header;
