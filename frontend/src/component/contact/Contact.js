import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Sc from '../../cmncomp/Sc'
import Footer from '../../cmncomp/Footer'
import Textss from "../../cmncomp/Textss";
import './Aboutus.css';

function ContactPage() {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_it7saqc', 'template_w0lcbtg', form.current, '_lRVzAlOxongZ9hys')
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <><Sc /><div className="container">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-header-text ">Contact Us</h5>
        </div>
        <div className="modal-body">
          {emailSent ? (
            <div className="alert alert-success">Email sent successfully! Mail Sent</div>
          ) : (
            <>
              <p className="modal-content-para">
                <strong>Customer Care Number:</strong> 14646 OR 0755-6610661 / 0755-4090600 (Language: Hindi and English)<br/>
                <strong>For Railway tickets booked through IRCTC</strong><br/>
                <strong>General Information</strong><br/>
                <strong>I-tickets/e-tickets :</strong> care@irctc.co.in<br/>
                <strong>For Cancellation E-tickets :</strong>  etickets@irctc.co.in<br/>
                <strong> For IRCTC iMudra Prepaid Wallet & Card :</strong>  imudracare@irctc.co.in<br/>
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="from_name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" name="user_email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="query">Query:</label>
                  <textarea id="query" name="message" rows="4" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="modal-content-para">
                <strong>Registered Office / Corporate Office</strong><br/>
                <strong>Indian Railway Catering and Tourism Corporation Ltd.,</strong><br/>
                <strong>B-148, 11th Floor, Statesman House,</strong><br/>
                <strong>Barakhamba Road, New Delhi 110001</strong><br/>
                </p>
              </form>
              
            </>
          )}
        </div>
        
      </div>

    </div><Textss/><Footer/></>
  );
}

export default ContactPage;
