//import libraries
import React from 'react';

// create a functional component
const Header = (props) => {
    return (
        <React.Fragment> 
            <header id="pagetop">
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo page-scroll"><a href="index.html#pagetop"><img src={process.env.PUBLIC_URL + "/images/eve-black.jpg"} alt="logo" /></a></div>
                                <div className="mm-toggle-wrap">
                                    <div className="mm-toggle"> <i className="icon-menu"><img src={process.env.PUBLIC_URL + "/images/menu-icon.png"} alt="Menu" /></i></div>
                                </div>
                                <ul className="menu">
                                    <li className="page-scroll"><a href="index.html#salon">The Salon</a></li>
                                    <li className="page-scroll"><a href="index.html#ourteam">Meet our team</a></li>
                                    <li className="page-scroll"><a href="index.html#services">Our Services</a></li>
                                    <li className="page-scroll"><a href="index.html#gallery">portfolio</a></li>
                                    <li className="page-scroll"><a href="index.html#promotions">Promotions</a></li>
                        
                                    <li className="page-scroll"><a href="index.html#contact">Contact</a></li>
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
