import React, { useState } from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Pay from "../payment/Pay";
import "./cmn.css";

function PaymentAndConfirmation({
  selectedClass,
  numPassengers,
  onBackToBooking,
  confirmationData,
}) {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [pnrNumber, setPnrNumber] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);

  const costPerSeat = {
    general: 20,
    sleeper: 40,
    ac: 60,
  };

  const totalCost = costPerSeat[selectedClass] * numPassengers;

  const handlePaymentStatusChange = async (response) => {
    // Dummy logic for simulating a successful payment
    try {
      // Simulating a successful response from the server
      const dummyServerResponse = {
        status: 200,
        data: {
          pnrNumber: "ABC123",
          bookedSeats: ["A1", "A2", "A3"],
        },
      };

      if (dummyServerResponse.status === 200) {
        setPnrNumber(dummyServerResponse.data.pnrNumber);
        setBookedSeats(dummyServerResponse.data.bookedSeats);
        setPaymentStatus("success");
      } else {
        console.error("Payment failed.");
        setPaymentStatus("failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus("failed");
    }
  };

  const handlePrint = () => {
    // ... (existing code for creating PDF)
  };

  const handleCancel = () => {
    onBackToBooking();
  };

  return (
    <div className="main_container">
      <div className="train_details">
        <h1 className="heading">Ticket Confirmation</h1>
        <p>Total Cost: Rs.{totalCost}</p>

        {paymentStatus === "success" ? (
          <div>
            {/* ... (existing code for displaying confirmation details) */}
          </div>
        ) : (
          <Pay onPaymentStatusChange={handlePaymentStatusChange} totalCost={totalCost} />
        )}
      </div>
    </div>
  );
}

export default PaymentAndConfirmation;
