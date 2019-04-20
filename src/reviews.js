//import libraries
import React from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';

// create a functional component
const Reviews = (props) => (
    <React.Fragment>
        <MobileMenu/>
        <div id="page">
            <Header/>
            <h1 style={{
                display: 'flex', 
                justifyContent:'center',
                alignItems: 'center',
                marginTop:'100px'
            }}>Reviews</h1>
        </div>
    </React.Fragment>
);

export default Reviews;
