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
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue. Nam auctor nisi est, nec tempus lacus viverra nec. Nullam cursus, neque non congue aliquam, mauris massa consequat sem, ut laoreet nisi erat et lectus.Nam auctor nisi est, nec tempus lacus viverra nec. Nullam cursus, neque non congue aliquam, mauris massa consequat sem, ut laoreet nisi erat et lectus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
);

export default Slider;
