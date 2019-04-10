import React from 'react';

const Ourteam = (props) => (
    <section id="ourteam" className="wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <h2>Meet the Team</h2>
                    <div className="ourteamd">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue. Nam auctor nisi est, nec tempus lacus viverra nec. Nullam cursus, neque non congue aliquam, mauris massa consequat sem, ut laoreet nisi erat et lectus. Nullam non neque eros. Pellentesque nec vulputate eros.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="responsive">
                        <div>
                            <div className="third-effect">
                                <img src="images/eve2.jpeg" className="img-responsive" alt="Our Team" />
                                <div className="mask">
                                    <a href="index.html#">Facebook</a>
                                    <a href="index.html#" className="twitter">Twitter</a>
                                </div>
                            </div>
                            <div className="team">
                                <h3>Evelyn</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
);

export default Ourteam;
