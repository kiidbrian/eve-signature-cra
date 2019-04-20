//import libraries
import React from 'react';

// create a functional component
const Slider = (props) => (
    <React.Fragment>
        <div className="sliderfull">
            <div id="rev_slider_4_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classicslider1" style={{margin: '0px auto', backgroundColor: 'transparent', padding: '0px', marginTop: '0px', marginBottom: '0px' }}>
                {/** START REVOLUTION SLIDER 5.0.7 auto mode **/}
            <div id="rev_slider_4_1" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.0.7">
                    <ul>
                        {/** SLIDE  **/}
                <li data-index="rs-16" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-description="">
                        {/** MAIN IMAGE  **/}
                    <img src={process.env.PUBLIC_URL+"/images/slider/slider1.jpg"} alt="slider" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina/> 
                </li>
                        {/** SLIDE  **/}
                <li data-index="rs-17" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-description="">
                        {/** MAIN IMAGE  **/}
                    <img src={process.env.PUBLIC_URL+"/images/slider/slider2.jpg"} alt="slider" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina/>
                </li>
                <li data-index="rs-18" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-description="">
                        {/** MAIN IMAGE  **/}
                    <img src={process.env.PUBLIC_URL+"/images/slider/slider3.jpg"} alt="slider" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina/> 
                </li>
                </ul>
                    <div className="tp-static-layers"></div>
                    <div className="tp-bannertimer" style={{height: '7px', backgroundColor: 'rgba(255, 255, 255, 0.25)'}}></div>
            </div>
            </div>
        </div>

        <section className="slider-titile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 pull-right">
                        <div className="sliderarrow">
                            <a className="left rev-leftarrow" href="a">Left</a>
                            <a className="right rev-rightarrow" href="s">Right</a>
                        </div>
                        <div className="titile-bg">
                            <h1></h1>
                        </div>
                        <div className="white-bg">
                            <p> Eve's Hair represents quintessential and elegance in hair styling.
                            In the beauty industry, there is always something new to learn, be it a
                            new formulation, a new technique or a better way to retain your clientele. <br/>
                            On a daily basis, Eve's Hair Signature deals with the science and art of hair,
                            how to manage their clientele, their budget, their time, their retail, all the while
                            looking fabulous without a hair out of place! Eve's Hair Signature is here to grow as a
                            person, as an artist and by God's grace, consistency and firmness of purpose, a thriving
                            business mogul.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
);

export default Slider;
