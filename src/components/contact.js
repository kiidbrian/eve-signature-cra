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
                    <form name="ContactForm" id="ContactForm" method="post">
                        <div className="form-group pull-left">
                            <input type="text" className="form-control required" name="ContactFullName" id="ContactFullName" placeholder="Name"  />
                        </div>
                            <div className="form-group pull-left marright0">
                                <input type="email" className="form-control required email" name="ContactEmail" id="ContactEmail" placeholder="Email Id" />
                            </div>
                            <div className="form-group pull-left">
                                <input type="text" className="form-control required number" name="ContactNumber" id="ContactNumber" placeholder="Contact Number"  />
                            </div>
                            <div className="form-group pull-left marright0">
                                <input type="text" className="form-control required" name="ContactCompanyName" id="ContactCompanyName" placeholder="Company Name"/>
                            </div>
                            <div className="textarea pull-left">
                                <textarea placeholder="Description" name="ContactDescription" id="ContactDescription" className="form-control"></textarea>
                            </div>
                        <button type="submit" className="btn btn-default" value="Submit" >SUBMIT</button>
                    </form>
                <div className="coypright">
                    <p>&copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
);

export default Contact;
