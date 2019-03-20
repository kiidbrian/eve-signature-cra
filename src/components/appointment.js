//import libraries
import React from 'react';

// create a functional component
const Appointment = (props) => (
    <React.Fragment>
    <section id="appoinment" className="col-padtop wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="appoimentbg">
                        <div className="col-sm-12 col-md-9 col-lg-8">
                            <h2>make an appointment</h2>
                            <p>Before appointment please shampoo wash, condition and blow dry hair the day before or morning of appointment.
                            Moisturizing scalp with hair oil is optional, preferably please dont. With the exception of natural/4c hair treat with conditioner.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div className="appfrm">
                            <div id="SuccessMessage"></div>
                            <div id="ErrorMessage"></div>
                            <form method="post">
                                <input type="hidden" name="form-name" value="AppointmentFrm" />
                                <div className="col-sm-12 col-md-8 col-lg-7 appfrmleft">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="AppointmentFullName" id="AppointmentFullName" className="form-control required"/>
                                    </div>
                                        <div className="form-group mt-right0">
                                            <label>Email</label>
                                            <input type="email" className="form-control required email" name="AppointmentEmail" id="AppointmentEmail" />
                                        </div>
                                        <div className="form-group pull-left">
                                            <label>Contact Number</label>
                                            <input type="text" name="AppointmentContactNumber" id="AppointmentContactNumber" className="form-control required number"/>
                                        </div>
                                            <div className="form-group mt-right0">
                                                <div className="input-append dateinput">
                                                    <label className="control-label">Date</label>
                                                    <div className="desktopdate"><input type="text" className="form-control required" name="AppointmentDate" id="datePicker" /></div>
                                                    <div className="mobiledate"><input type="date" className="form-control required" name="AppointmentMobileDate" /></div>
                                                </div>
                                                <div className="time">
                                                    <label>Time</label>
                                                    <select name="AppointmentTime" id="AppointmentTime">
                                                        <option defaultChecked>Select</option>
                                                        <option>11:00am</option>
                                                        <option>12:00pm</option>
                                                        <option>01:00pm</option>
                                                        <option>02:00pm</option>
                                                        <option>03:00pm</option>
                                                        <option>04:00pm</option>
                                                        <option>05:00pm</option>
                                                        <option>06:00pm</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-5 appfrmright">
                                            <div className="form-group textarea">
                                                <label className="control-label">Description</label>
                                                <textarea className="form-control" name="AppointmentMessage" rows="5" id="AppointmentMessage"></textarea>
                                            </div>
                                            <div className="submitbtn">
                                                <button type="submit" className="btn btn-default" value="Submit" >SUBMIT</button>
                                            </div>
                                        </div> 
                            </form>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>


  <section className="excellence wow fadeInUp">
    <div id="parallax-2" className="parallax fixed fixed-desktop">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-5 pull-right col-pad5 bg-white">
            <h2>Expression of Excellence</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue. Nam auctor nisi est, nec tempus lacus viverra nec. Nullam cursus, neque non congue aliquam, mauris massa consequat sem, ut laoreet nisi erat et lectus. Nullam non neque eros. Pellentesque nec vulputate eros. Integer scelerisque lorem id massa accumsan, ut faucibus ante suscipit. Nunc tincidunt et ligula vitae pharetra.</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </section>
  </React.Fragment>
);

export default Appointment;
