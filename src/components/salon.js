//import libraries
import React from 'react';

// create a functional component
const Salon = (props) => (
    <section id="salon" className="col-padtop wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-padright-none wow fadeInLeft"><img src={process.env.PUBLIC_URL+"/images/saloon-1.jpg"} alt="Saloon" /></div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-padleft-none wow fadeInRight"><img src={process.env.PUBLIC_URL+"/images/saloon-2.jpg"} alt="Saloon" /></div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-padleft-none wow fadeInRight"><img src={process.env.PUBLIC_URL+"/images/saloon-3.jpg"} alt="Saloon" /></div>
            </div>
        </div>
    </section>
);

export default Salon;
