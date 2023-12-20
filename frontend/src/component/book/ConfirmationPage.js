import React from 'react';
import "./cmn.css";

function ConfirmationPage({ show, onClose, onProceed, onCancel, confirmationData }) {
  return (
    <div className="main_container">
      <div className="train_details">
        <h1 className='heading'>Ticket Confirmation</h1>

        {confirmationData && (
          <div className="confirmation-content">
            <p>Selected date: {confirmationData.selectedDate.toDateString()}</p>
            <p>Source: {confirmationData.source}</p>
            <p>Destination: {confirmationData.destination}</p>
            <p>Train ID: {confirmationData.selectedTrain.id}</p>
            <p>Name of the Train: {confirmationData.selectedTrain.name}</p>
            <p>Departure Time: {confirmationData.selectedTrain.departure_time}</p>
            <p>Arrival Time: {confirmationData.selectedTrain.arrival_time}</p>
            <p>Selected Class: {confirmationData.selectedClass}</p>
            <p>Number of Passengers: {confirmationData.numPassengers}</p>
            <p>Total Cost: Rs.{confirmationData.totalCost}</p>
          </div>
        )}

        {/* Display passenger details in a table */}
        <h3 className='heading'>Passenger Details:</h3>
        {confirmationData && (
          <table className='train-table'>
            <thead>
              <tr>
                <th>Passenger</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="confirmation-buttons">
          <button className="btn-pri mt-2"onClick={onProceed}>Proceed to Payment</button>
          <button className='btn-sec mt-2' onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
