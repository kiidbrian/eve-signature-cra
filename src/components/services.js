//import libraries
import React from 'react';

// create a functional component
const Services = (props) => (
    <section id="services" className="col-padtop">
        <div className="container">
            <div className="row marbottom">
                <div className="col-sm-12 col-md-7 col-lg-5 pull-right wow fadeInUp">
                    <h2>Our Services</h2>
                    <p className="pull-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue. Nam auctor nisi est, nec tempus lacus.</p>
                </div>
            </div>
            <div className="row marbottom wow fadeInUp">
                <div className="col-sm-12 col-md-7 col-lg-7 col-padright-none">
                    <div className="subtitle">
                        <h2 className="titile col-xs-offset-1 col-sm-offset-0 col-md-offset-1 ">BRAIDS</h2>
                    </div>
                    <img src={process.env.PUBLIC_URL+"/images/braids.jpg"} className="img-responsive" alt="cutting" /> 
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-padleft-none">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>TYPE</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Box Braids</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cornrow Braids</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Faux Locs</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Senegalese Twists</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Passion/Spring Twists</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Kinky Twist</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Crochet</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Bantu Knots</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                <div className="row marbottom wow fadeInUp">
                    <div className="col-sm-12 col-md-7 col-lg-7 col-padleft-none displayhide">
                        <div className="subtitle">
                            <h2 className="titile col-xs-offset-2">SEW INS</h2>
                        </div>
                        <div className="subtitle">
                            <h2 className="color">SEW INS</h2>
                        </div>
                        <img src={process.env.PUBLIC_URL+"/images/color.jpg"} className="img-responsive" alt="Colour" /> </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 col-padright-none">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>STYLE</th>
                                        <th>PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bigw">Hair Leave out</td>
                                        <td className="smallw"></td>
                                    </tr>
                                    <tr>
                                        <td className="bigw">Full sew in</td>
                                        <td className="smallw"></td>
                                    </tr>
                                    <tr>
                                        <td className="bigw">Lace closure sew in</td>
                                        <td className="smallw"></td>
                                    </tr>
                                    <tr>
                                        <td className="bigw">Pixie cut</td>
                                        <td className="smallw"></td>
                                    </tr><tr>
                                        <td className="bigw">Custom Wigs</td>
                                        <td className="smallw"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7 col-padleft-none displayvisible">
                            <div className="subtitle">
                                <h2 className="titile col-xs-offset-2">SEW IN</h2>
                            </div>
                            <img src={process.env.PUBLIC_URL+"/images/color.jpg"} className="img-responsive" alt="Colour" /> </div>
                        </div>
                        <div className="row wow fadeInUp">
                            <div className="col-sm-12 col-md-7 col-lg-7 col-padright-none">
                                <div className="subtitle">
                                    <h2 className="titile col-xs-offset-1">HAIR STYLING</h2>
                                </div>
                                <img src={process.env.PUBLIC_URL+"/images/style.jpg"} className="img-responsive" alt="Style"/> </div>
                                <div className="col-sm-12 col-md-5 col-lg-5 col-padleft-none">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>STYLE</th>
                                                <th>PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Natural Hair Updos</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    </section>
);

export default Services;
