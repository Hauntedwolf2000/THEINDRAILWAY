// src/ScrollingTicker.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScrollingTicker.css';
import Footer from '../../cmncomp/Footer';
import Sc from '../../cmncomp/Sc';
import Modal from '../../cmncomp/Modal';

class ScrollingTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [
        <p>Travel Insurance claim process for passengers having Liberty General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841).<a className="text-danger" href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf"><br></br>Click here.</a></p>,
        <p>Travel Insurance claim process for passengers having SBI General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841)..<a className="text-danger" href="https://contents.irctc.co.in/en/TIClaimProcess_SBIGen.pdf"><br></br>Click here.</a></p>,
        <a className="text-danger" href="https://contents.irctc.co.in/en/TIClaimProcess_SBIGen.pdf"><br></br>Information regarding booking of pet dogs/cats in Passenger trains.</a>,
        'Tickets booked through unauthorised agents or scripting can be released without refund.',
        'Money debited but ticket not booked. Click here to know more',
        'Please input correct mobile number of passenger for getting timely alerts on booked journey.',
        'Refund of the cancelled trains is processed on T+1 day of journey date by Indian Railways. Thereafter, refund amount is credited in 3 to 4 days in users account',
        <p>Travel Insurance claim process for passengers having Liberty General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841).<a className="text-danger" href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf"><br></br>Click here.</a></p>,
        'Please input correct mobile number of passenger for getting timely alerts on booked journey.',
        <p>Travel Insurance claim process for passengers having Liberty General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841).<a className="text-danger" href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf"><br></br>Click here.</a></p>,
        <p>Travel Insurance claim process for passengers having SBI General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841)..<a className="text-danger" href="https://contents.irctc.co.in/en/TIClaimProcess_SBIGen.pdf"><br></br>Click here.</a></p>,
        <a className="text-danger" href="https://contents.irctc.co.in/en/TIClaimProcess_SBIGen.pdf"><br></br>Information regarding booking of pet dogs/cats in Passenger trains.</a>,
        'Tickets booked through unauthorised agents or scripting can be released without refund.',
        'Money debited but ticket not booked. Click here to know more',
        'Please input correct mobile number of passenger for getting timely alerts on booked journey.',
        'Refund of the cancelled trains is processed on T+1 day of journey date by Indian Railways. Thereafter, refund amount is credited in 3 to 4 days in users account',
        <p>Travel Insurance claim process for passengers having Liberty General Insurance Ltd. affected by Rail accident at Balasore, Odisha (Train No. 12864 and 12841).<a className="text-danger" href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf"><br></br>Click here.</a></p>,
        'Please input correct mobile number of passenger for getting timely alerts on booked journey.',
        // Add your announcements here
      ],
      currentIndex: 0,
      isHovered: false, // Track whether the ticker is hovered
    };
  }

  componentDidMount() {
    this.startScrolling();
  }

  startScrolling = () => {
    this.intervalId = setInterval(() => {
      if (!this.state.isHovered) {
        this.setState((prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % prevState.announcements.length,
        }));
      }
    }, 3000); // Change the duration as needed (in milliseconds)
  };

  handleHover = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { announcements, currentIndex } = this.state;

    // Reverse the announcements for the left column
    const leftColumnAnnouncements = [...announcements].reverse();

    return (
      <><Sc />
      <div className='back'>
      <div className="container pt-4 " >
        <div className="row">
          {/* Left Column */}
          
          <div className="col-md-6">
            <div className="bg-secondary p-4">
            <div className="text-center fw-bolder text-white fs-3">ALERTS</div>
              <p className="text-center text-white">
                <div
                  className="vertical-ticker"
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <div className="vertical-ticker-content">
                    {leftColumnAnnouncements.map((announcement, index) => (
                      <div
                        key={index}
                        className={`vertical-ticker-item ${index === currentIndex ? 'active' : ''}`}
                      >
                        {announcement}
                      </div>
                    ))}
                  </div>
                </div>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="bg-info p-4">
            <div className="text-center text-white fs-3 fw-bolder ">UPDATES</div>
              <p className="text-center text-white ">
                <div
                  className="vertical-ticker"
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <div className="vertical-ticker-content">
                    {announcements.map((announcement, index) => (
                      <div
                        key={index}
                        className={`vertical-ticker-item ${index === currentIndex ? 'active' : ''}`}
                      >
                        {announcement}
                      </div>
                    ))}
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md pt-4">
  <div className="bg-body-50 p-4">
  <div className="text-center text-white fs-3 fw-bolder">TO BE NOTED</div>
  <ul>
  <li className="text-left text-white pt-4 fw-bolder">
    Dear IRCTC iMudra users, IRCTC iMudra IndusInd Bank wallet and prepaid card has been discontinued. If your wallet balance refund is yet to be processed, please write to us at reachus@indusind.com
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
  IRCTC SBI Loyalty Card :
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
  IRCTC E-Catering : Get your Favourite Food delivered on your Train Seat/Berth with IRCTC E-Catering at selected stations<a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
    Dear IRCTC iMudra users, IRCTC iMudra IndusInd Bank wallet and prepaid card has been discontinued. If your wallet balance refund is yet to be processed, please write to us at reachus@indusind.com
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
    Dear IRCTC iMudra users, IRCTC iMudra IndusInd Bank wallet and prepaid card has been discontinued. If your wallet balance refund is yet to be processed, please write to us at reachus@indusind.com
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
  IRCTC SBI Loyalty Card :
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf fw-bolder">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
  IRCTC E-Catering : Get your Favourite Food delivered on your Train Seat/Berth with IRCTC E-Catering at selected stations<a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
  <li className="text-left text-white pt-2 fw-bolder">
    Dear IRCTC iMudra users, IRCTC iMudra IndusInd Bank wallet and prepaid card has been discontinued. If your wallet balance refund is yet to be processed, please write to us at reachus@indusind.com
    <a href="https://contents.irctc.co.in/en/iMudraIndusInd.pdf">Click here to get more details.</a>
  </li>
</ul>

  </div>
</div>
<Modal/>

        
      </div>
      <Footer />
      </div>
      </>
    );
  }
}

export default ScrollingTicker;
