import React from 'react'
import './Aboutus.css';
import Sc from '../../cmncomp/Sc'
import Footer from '../../cmncomp/Footer'
import Textss from "../../cmncomp/Textss";

const Aboutus = () => {
  return (
    <><Sc /><div className='abt'>
    <h1 className='text'>
        <span className='text-one'>BOOKMY</span>TRAIN</h1>
    <p className='content'>Welcome to our state-of-the-art railway ticket booking platform, where your journey begins with ease and convenience. Whether you're planning a quick daily commute or embarking on an exciting cross-country adventure, we're here to simplify the booking process for you. Our intuitive and user-friendly interface, coupled with a wide array of robust search options, ensures that you can effortlessly find the perfect route, time, and class for your rail journey.
Our commitment to security is paramount. We've implemented a state-of-the-art payment system that guarantees the safety of your financial transactions.
<br />  
<br />
With encrypted payment gateways and stringent data protection measures, you can book your tickets with peace of mind.
Explore a diverse world of destinations, from bustling metropolises to tranquil countryside getaways. Choose your preferred class, whether it's the comfort of first-class or the affordability of standard class, and secure your tickets with just a few clicks.
We know that your travel plans can change, so our real-time updates keep you informed about any schedule adjustments or delays. And if you ever need assistance, our dedicated customer support team is available around the clock to address your inquiries, ensuring your rail travel experience is smooth and enjoyable.
So, embark on your next railway adventure with confidence, knowing that we're committed to providing you with a seamless booking experience, making your journey as memorable as the destinations you'll explore.</p>

</div><Textss/><Footer/></>
  )
}

export default Aboutus