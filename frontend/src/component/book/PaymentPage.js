import React, { useState } from 'react';
import axios from 'axios';
import Pay from '../payment/Pay'; // Import the Pay component // Import the ConfirmationPage component
import ConfirmationPage1 from './ConfirmationPage1';

function PaymentPage({
  selectedClass,
  numPassengers,
  onBackToBooking,
  onPayment,
  confirmationData,
}) {
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Define the cost per seat for each class
  const costPerSeat = {
    general: 20,
    sleeper: 40,
    ac: 60,
  };

  // Calculate the total cost
  const totalCost = costPerSeat[selectedClass] * numPassengers;

  const handlePaymentStatusChange = async (response) => {
    try {
      const dataToSend = {
        trainId: confirmationData.selectedTrain.id,
        selectedClass,
        numPassengers,
        source: confirmationData.source,
        destination: confirmationData.destination,
        passengers: confirmationData.passengers,
        totalCost,
        razorpayResponse: response, // Include the Razorpay response
      };

      const serverResponse = await axios.post('http://localhost:8081/bookings', dataToSend);

      if (serverResponse.status === 200) {
        // Payment was successfully recorded on the server
        // Call onPayment() to handle any further actions
       
        // Set the payment status to 'success' after successful payment
        setPaymentStatus('success');
      } else {
        console.error('Payment failed.');
        // Set the payment status to 'failed' on payment failure
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      // Set the payment status to 'failed' on error
      setPaymentStatus('failed');
    }
  };

  return (
    <div>
      {paymentStatus !== 'success' && (
        <div>
          <h1>Payment Page</h1>
          <p>Selected Class: {selectedClass}</p>
          <p>Number of Passengers: {numPassengers}</p>
          <p>Total Amount: Rs. {totalCost}</p>
          <Pay onPaymentStatusChange={handlePaymentStatusChange} />
          <button onClick={onBackToBooking}>Back to Booking Form</button>
        </div>
      )}

      {paymentStatus === 'success' ? (
        <div >
          <h1 style={{paddingTop:120 , textAlign:'center'}}>Payment Successful!</h1>
          <p>Your booking and passenger details have been successfully recorded.</p>
          <ConfirmationPage1 show={true} confirmationData={confirmationData} />
        </div>
      ) : paymentStatus === 'failed' ? (
        <div>
          <h1>Payment Failed!</h1>
          <p>There was an issue processing your payment. Please try again later.</p>
          <button onClick={onBackToBooking}>Back to Booking Form</button>
        </div>
      ) : null}
    </div>
  );
}

export default PaymentPage;
