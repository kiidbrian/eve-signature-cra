//import libraries
import React from 'react';

// create a functional component
const MobileMenu = (props) => (
    <React.Fragment>
        <div id="overlay"></div>
        <div id="mobile-menu">
        <ul>
            <li class="page-scroll"><a href="index.html#salon">The Salon</a></li>
            <li class="page-scroll"><a href="index.html#ourteam">Meet our team</a></li>
            <li class="page-scroll"><a href="index.html#services">Our Services</a></li>
            <li class="page-scroll"><a href="index.html#gallery">portfolio</a></li>
            <li class="page-scroll"><a href="index.html#promotions">Promotions</a></li>
        </ul>
        </div>
    </React.Fragment>
);

export default MobileMenu;
