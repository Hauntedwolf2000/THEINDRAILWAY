import React from 'react';
import "./cmn.css";

function ConfirmationPage1({ show, onClose, onProceed, onCancel, confirmationData }) {

    
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
          </div>
        )}

        {/* Display passenger details in a table */}
        <h3 className='heading'>Passenger Details:</h3>
        {confirmationData && (
          <table>
            <thead>
              <tr>
                
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Seat</th>
              </tr>
            </thead>
            <tbody>
              {confirmationData.passengers.map((passenger, index) => (
                <tr key={index}>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                  <td>{passenger.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="confirmation-buttons" style={{textAlign:'center'}}>
          <button onClick={onProceed} >Print</button>
          <button onClick={onCancel}>Cancel</button>
          
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage1;
