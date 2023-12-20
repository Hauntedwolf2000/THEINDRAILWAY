import React, { useState } from "react";
import axios from "axios";
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
    try {
      const dataToSend = {
        trainId: confirmationData.selectedTrain.id,
        selectedClass,
        numPassengers,
        source: confirmationData.source,
        destination: confirmationData.destination,
        passengers: confirmationData.passengers,
        totalCost,
        razorpayResponse: response,
      };

      const serverResponse = await axios.post(
        "http://localhost:8081/bookings",
        dataToSend
      );

      if (serverResponse.status === 200) {
        setPnrNumber(serverResponse.data.pnrNumber);
        setBookedSeats(serverResponse.data.bookedSeats);
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
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Ticket Confirmation", 10, 10);
    doc.text(`Total Cost: Rs.${totalCost}`, 10, 20);

    if (confirmationData) {
      doc.text(`Selected date: ${confirmationData.selectedDate?.toDateString()}`, 10, 30);
      doc.text(`Source: ${confirmationData.source}`, 10, 40);
      doc.text(`Destination: ${confirmationData.destination}`, 10, 50);
      doc.text(`Train ID: ${confirmationData.selectedTrain?.id}`, 10, 60);
      doc.text(`Name of the Train: ${confirmationData.selectedTrain?.name}`, 10, 70);
      doc.text(`Departure Time: ${confirmationData.selectedTrain?.departure_time}`, 10, 80);
      doc.text(`Arrival Time: ${confirmationData.selectedTrain?.arrival_time}`, 10, 90);
      doc.text(`Selected Class: ${confirmationData.selectedClass}`, 10, 100);
      doc.text(`Number of Passengers: ${confirmationData.numPassengers}`, 10, 110);
      doc.text(`PNR Number: ${pnrNumber}`, 10, 120);
    }

    if (confirmationData && confirmationData.passengers) {
      let yOffset = 140;
      doc.text("Passenger Details:", 10, yOffset);
      yOffset += 10;

      // Create a table for passenger details
      const columns = ["Passenger", "Name", "Age", "Gender", "Address", "Seat type"];
      const data = [];
      
      confirmationData.passengers.forEach((passenger, index) => {
        data.push([`Passenger ${index + 1}`, passenger.name, passenger.age, passenger.gender, passenger.address, 
          bookedSeats && bookedSeats[index] ? bookedSeats[index][0] + bookedSeats[index].substring(1) : ""]);
      });

      doc.autoTable({
        startY: yOffset,
        head: [columns],
        body: data,
      });
    }

    // Save the PDF with a specific name (e.g., 'confirmation.pdf')
    doc.save('confirmation.pdf');
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
            {confirmationData && (
              <div className="confirmation-content">
                <p>
                  Selected date: {confirmationData.selectedDate?.toDateString()}
                </p>
                <p>Source: {confirmationData.source}</p>
                <p>Destination: {confirmationData.destination}</p>
                <p>Train ID: {confirmationData.selectedTrain?.id}</p>
                <p>Name of the Train: {confirmationData.selectedTrain?.name}</p>
                <p>
                  Departure Time:{" "}
                  {confirmationData.selectedTrain?.departure_time}
                </p>
                <p>
                  Arrival Time: {confirmationData.selectedTrain?.arrival_time}
                </p>
                <p>Selected Class: {confirmationData.selectedClass}</p>
                <p>Number of Passengers: {confirmationData.numPassengers}</p>
                <p>PNR Number: {pnrNumber}</p>
              </div>
            )}

            <h3 className="heading">Passenger Details:</h3>
            {confirmationData && confirmationData.passengers ? (
              <div>
                <table className="train-table">
                  <thead>
                    <tr>
                      <th>Passenger</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Seat type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confirmationData.passengers.map((passenger, index) => (
                      <tr key={index}>
                        <td>Passenger {index + 1}</td>
                        <td>{passenger.name}</td>
                        <td>{passenger.age}</td>
                        <td>{passenger.gender}</td>
                        <td>{passenger.address}</td>
                        <td>
                          {bookedSeats && bookedSeats[index]
                            ? bookedSeats[index][0] +
                              bookedSeats[index].substring(1)
                            : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            <div className="confirmation-buttons" style={{ textAlign: "center" }}>
              <button className="btn-pri mt-2" onClick={handlePrint}>Print</button>
              <button className="btn-sec mt-2" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <Pay onPaymentStatusChange={handlePaymentStatusChange} totalCost={totalCost} />
          
        )}
      </div>
    </div>
  );
}

export default PaymentAndConfirmation;
