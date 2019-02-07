import React, { Component } from 'react';
const $ = window.$;
class App extends Component {
  render() {
    return (
      <div className="size1 bg0 where1-parent">
        <div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2" style={{backgroundImage: `url(images/selena.jpg)`}}>
          <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 days">35</span>
              <span className="s2-txt4">Days</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 hours">17</span>
              <span className="s2-txt4">Hours</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 minutes">50</span>
              <span className="s2-txt4">Minutes</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 seconds">39</span>
              <span className="s2-txt4">Seconds</span>
            </div>

          </div>
        </div>

        <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
          <div className="wrap-pic1">
            <p className="">Eve's Hair Signature</p>
            {/**<img src="images/icons/logo.png" alt="LOGO"/>**/}
          </div>
          <div className="p-t-50 p-b-60">
            <p className="m1-txt1 p-b-36">
              Our website is <span className="m1-txt2">Coming Soon</span>, follow us for update now!
            </p>

            {/**<form className="contact100-form validate-form">
              <div className="wrap-input100 m-b-10 validate-input" data-validate="Name is required">
                <input className="s2-txt1 placeholder0 input100" type="text" name="name" placeholder="Your Name"/>
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 m-b-20 validate-input" data-validate="Email is required: ex@abc.xyz">
                <input className="s2-txt1 placeholder0 input100" type="text" name="email" placeholder="Email Address" />
                <span className="focus-input100"></span>
              </div>
              <div className="w-full">
                <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
                  Subscribe
                </button>
              </div>
            </form>

            <p className="s2-txt3 p-t-18">
              And don’t worry, we hate spam too! You can unsubcribe at anytime.
            </p>**/}
          </div>

          <div className="flex-w">
            <a href="https://www.facebook.com/EveTheHairstylist/" target="_blank" rel="noopener noreferrer" className="flex-c-m size5 bg3 how1 trans-04 m-r-5">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/eve_thehairstylist/" target="_blank" rel="noopener noreferrer" className="flex-c-m size5 bg4 how1 trans-04 m-r-5">
              <i className="fa fa-instagram"></i>
            </a>
            {/** <a href="index.html#" className="flex-c-m size5 bg5 how1 trans-04 m-r-5">
              <i className="fa fa-youtube-play"></i>
            </a> **/}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $('.cd100').countdown100({
      /*Set Endtime here*/
      /*Endtime must be > current time*/
      endtimeYear: 0,
      endtimeMonth: 0,
      endtimeDate: 30,
      endtimeHours: 18,
      endtimeMinutes: 0,
      endtimeSeconds: 0,
      timeZone: "" 
      // ex:  timeZone: "America/New_York"
      //go to " http://momentjs.com/timezone/ " to get timezone
    });

    $('.js-tilt').tilt({
      scale: 1.1
    })
  }
}

export default App;
