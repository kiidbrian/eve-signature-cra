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
                    <img src={process.env.PUBLIC_URL + "/images/big-load1.jpeg"} className="img-responsive" alt="cutting" />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-padleft-none">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Box Braids</td>
                            </tr>
                            <tr>
                                <td>Cornrow Braids</td>
                            </tr>
                            <tr>
                                <td>Faux Locs</td>
                            </tr>
                            <tr>
                                <td>Senegalese Twists</td>
                            </tr>
                            <tr>
                                <td>Passion/Spring Twists</td>
                            </tr>
                            <tr>
                                <td>Kinky Twist</td>
                            </tr>
                            <tr>
                                <td>Crochet</td>
                            </tr>
                            <tr>
                                <td>Bantu Knots</td>
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
                    <img src={process.env.PUBLIC_URL + "/images/eve4.jpg"} className="img-responsive" alt="Colour" /> </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-padright-none">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>STYLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bigw">Hair Leave out</td>
                            </tr>
                            <tr>
                                <td className="bigw">Full sew in</td>
                            </tr>
                            <tr>
                                <td className="bigw">Lace closure sew in</td>
                            </tr>
                            <tr>
                                <td className="bigw">Pixie cut</td>
                            </tr><tr>
                                <td className="bigw">Custom Wigs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 col-padleft-none displayvisible">
                    <div className="subtitle">
                        <h2 className="titile col-xs-offset-2">SEW IN</h2>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/eve4.jpg"} className="img-responsive" alt="Colour" /> </div>
            </div>
            <div className="row wow fadeInUp">
                <div className="col-sm-12 col-md-7 col-lg-7 col-padright-none">
                    <div className="subtitle">
                        <h2 className="titile col-xs-offset-1">CROCHET</h2>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/eve5.jpg"} className="img-responsive" alt="Style" /> </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-padleft-none">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>TYPES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Crochet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row marbottom wow fadeInUp" style={{marginTop: '50px'}}>
                <div className="col-sm-12 col-md-7 col-lg-7 col-padleft-none displayhide">
                    <div className="subtitle">
                        <h2 className="titile col-xs-offset-2">CUSTOM WIGS</h2>
                    </div>
                    <div className="subtitle">
                        <h2 className="color">CUSTOM WIGS</h2>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/eve6.jpg"} className="img-responsive" alt="Colour" /> </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-padright-none">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>STYLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bigw">Custom Wigs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 col-padleft-none displayvisible">
                    <div className="subtitle">
                        <h2 className="titile col-xs-offset-2">CUSTOM WIGS</h2>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/eve6.jpg"} className="img-responsive" alt="Colour" /> </div>
            </div>
        </div>
    </section>
);

export default Services;
