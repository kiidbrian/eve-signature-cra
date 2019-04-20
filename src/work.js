//import libraries
import React from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';

// create a functional component
const OurWorks = (props) => (
    <React.Fragment>
        <MobileMenu/>
        <div id="page">
            <Header/>
            <h1 style={{
                display: 'flex', 
                justifyContent:'center',
                alignItems: 'center',
                marginTop:'100px'
            }}>Our Works</h1>
        </div>
    </React.Fragment>
);

export default OurWorks;
