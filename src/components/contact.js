//import libraries
import React from 'react';

// create a functional component
const Contact = (props) => (
    <section id="contact" className="wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Contact</h2>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="contactmap">
                        <div className="mapcont">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25216.227802888236!2d144.956981!3d-37.812802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e793770d3%3A0x9e44d6ad0d76ba7c!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1429013152809" style={{border: '0'}}></iframe>
                        </div>
                        <div className="social">
                            <p>121 King Street, Meriden, CT USA</p>
                            <span>Phone - +1 (203) 715-6797 </span> <span><a href="mailto:info@evehairsignature.com">info@evehairsignature.com</a></span>
                            <div className="social-icon"> 
                                <a href="https://www.facebook.com/EveTheHairstylist/" target="_blank" rel="noopener noreferrer" className="facebook"></a> 
                                <a href="index.html#" className="twitter"></a> 
                                <a href="https://www.instagram.com/eve_thehairstylist/" target="_blank" rel="noopener noreferrer" className="google"></a> 
                                <a href="index.html#" className="youtube"></a> 
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 pull-right">
                    <div id="ContactSuccessMessage"></div>
                    <div id="ContactErrorMessage"></div>
                    <form method="post" style={{color: "#FFF", lineHeight: 4}}>
                        <label className="pull-left" style={{textDecoration: 'underline'}}>Working Days and Hours</label>
                        <p className="pull-left" style={{marginBottom: '7px'}}>Sundays and Mondays: CLOSED</p>
                        <p className="pull-left" style={{marginBottom: '7px'}}>Tuesdays - Thursday: 9am - 5pm</p>
                        <p className="pull-left" style={{marginBottom: '7px'}}>Friday & Saturday: 8am - 6pm</p>

                        <div className="coypright">
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  </section>
);

export default Contact;
