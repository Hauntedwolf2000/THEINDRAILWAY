import React, { useState,useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaymentPage from "./PaymentPage";
import "./cmn.css";
import ConfirmationPage from "./ConfirmationPage";
import Sc from "../../cmncomp/Sc";
// import Text from '../../cmncomp/Textss';
import Footer from "../../cmncomp/Footer";
import Text from '../../cmncomp/Textss'

function Bok({ auth }) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const availableOptions = ["Bangalore", "Vellore", "Chennai"];
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [numPassengers, setNumPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState(() => {
   
  });
  const [passengers, setPassengers] = useState(
    Array.from({ length: numPassengers }, () => ({}))
  );
  const [selectedClass, setSelectedClass] = useState("sleeper");
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);
  const fetchTrains = async () => {
    const validCities = ["bangalore", "chennai", "vellore"];
    const trimmedSource = source.trim().toLowerCase(); // Trim and convert to lowercase
    const trimmedDestination = destination.trim().toLowerCase(); // Trim and convert to lowercase

    if (!trimmedSource || !trimmedDestination) {
      // Display an alert message for empty input
      alert("Source and destination cannot be empty.");
      return;
    }

    if (
      !validCities.includes(trimmedSource) ||
      !validCities.includes(trimmedDestination)
    ) {
      // Display an alert message for an invalid entry
      alert(
        "Source and destination must be one of: bangalore, chennai, or vellore."
      );
      return;
    }

    if (trimmedSource === trimmedDestination) {
      // Display an alert message for an invalid entry
      alert("Source and destination cannot be the same.");
      return;
    }

    try {
      const baseURL = "http://localhost:8081";
      const response = await axios.get(
        `${baseURL}/trains?source=${trimmedSource}&destination=${trimmedDestination}`
      );
      setTrains(response.data);
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    setSelectedDate(tomorrow);
  }, []);
  
  

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];

    if (!updatedPassengers[index]) {
      updatedPassengers[index] = {};
    }

    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  function handlePassengerInputChange(index, field, event) {
    const input = event.target;
    const inputValue = input.value;
    const regex = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces

    if (!regex.test(inputValue)) {
      input.setCustomValidity("Only letters and spaces are allowed.");
    } else {
      input.setCustomValidity(""); // Clear any validation message
    }

    handlePassengerChange(index, field, inputValue);
  }

  const handleBooking = (e) => {
    if (source === destination) {
      alert(
        "Source and destination cannot be the same. Please enter valid entries."
      );
    } else {
      const costPerSeat = {
        general: 20,
        sleeper: 40,
        ac: 60,
      };

      const totalCost = numPassengers * costPerSeat[selectedClass]; // Calculate total cost
      const dataToConfirm = {
        selectedDate,
        source,
        destination,
        selectedTrain,
        numPassengers,
        selectedClass,
        passengers,
        totalCost, // Add total cost to the confirmation data
      };
      setConfirmationData(dataToConfirm);
      setShowConfirmationPage(true);
    }
  };

  const resetBookingForm = () => {
    setSource("");
    setDestination("");
    setTrains([]);
    setSelectedTrain(null);
    setNumPassengers(1);
    setSelectedDate(new Date());
    setPassengers(Array.from({ length: numPassengers }, () => ({})));
    setSelectedClass("sleeper");
  };

  // Filter the destination options based on the selected source
  const filteredOptions = availableOptions.filter(
    (option) => option !== source
  );

  const handleSourceChange = (e) => {
    const selectedSource = e.target.value;
    setSource(selectedSource);
    setDestination(""); // Reset the destination when source changes
  };

  return (
    <>
      <Sc />
      
      <div className="main_container">
        {showPaymentPage ? (
          <PaymentPage
            selectedClass={selectedClass}
            numPassengers={numPassengers}
            onBackToBooking={() => {
              resetBookingForm();
              setShowPaymentPage(false);
            }}
            onPayment={() => {
              alert("Payment successful");
            }}
            confirmationData={confirmationData}
          />
        ) : showConfirmationPage ? (
          <ConfirmationPage
            confirmationData={confirmationData}
            onClose={() => setShowConfirmationPage(false)}
            onProceed={() => {
              setShowConfirmationPage(false);
              setShowPaymentPage(true);
            }}
            onCancel={() => {
              resetBookingForm();
              setShowConfirmationPage(false);
            }}
          />
        ) : (
          <>
            <div className="train_details">
              <h1 className="heading">Train Details</h1>
              <div className="source_destination">
                <input
                  type="text"
                  placeholder="Source"
                  value={source}
                  onChange={handleSourceChange}
                  required
                  list="sourceOptions"
                  className="input-field"
                />
                <datalist id="sourceOptions">
                  {availableOptions.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>

                <input
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  list="destinationOptions"
                  className="input-field"
                />
                <datalist id="destinationOptions">
                  {filteredOptions.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>
                <DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="MM/dd/yyyy"
  isClearable
  placeholderText="Select a date"
/>

                <button onClick={fetchTrains} className="search-button">
                  Search
                </button>
              </div>

              {selectedTrain ? (
                <div className="selected_train">
                  <h3>Selected Train Details</h3>
                  {selectedDate && (
                    <p>Selected date: {selectedDate.toDateString()}</p>
                  )}
                  <p>Source: {source}</p>
                  <p>Destination: {destination}</p>
                  <p>Train ID: {selectedTrain.id}</p>
                  <p>Name: {selectedTrain.name}</p>
                  <p>
                    Departure @ {source}: {selectedTrain.departure_time}
                  </p>
                  <p>
                    Arrival @ {destination}: {selectedTrain.arrival_time}
                  </p>
                  <p>Seats (Sleeper): {selectedTrain.seats_sleeper}</p>
                  <p>Seats (AC): {selectedTrain.seats_ac}</p>
                  <p>Seats (General): {selectedTrain.seats_general}</p>

                  <label className="passenger-label">
                    Select Number of Passengers:
                  </label>
                  <select
                    value={numPassengers}
                    onChange={(e) => setNumPassengers(Number(e.target.value))}
                    className="passenger-select"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>

                  <label className="passenger-label">Select Class:</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="passenger-select"
                  >
                    <option value="sleeper">Sleeper</option>
                    <option value="ac">AC</option>
                    <option value="general">General</option>
                  </select>

                  <form onSubmit={handleBooking} className="passenger-form">
                    {Array.from({ length: numPassengers }).map((_, index) => (
                      <div
                        key={index}
                        className="passenger-info d-flex align-items-center"
                      >
                        <h5>Passenger{index + 1}</h5>
                        <input
                          type="text"
                          placeholder={`Name of Passenger ${index + 1}`}
                          value={passengers[index]?.name || ""}
                          onInput={(e) =>
                            handlePassengerInputChange(index, "name", e)
                          }
                          required
                          maxLength={20}
                          className="form-input"
                        />

                        <input
                          type="number"
                          placeholder={`Age of Passenger ${index + 1}`}
                          value={passengers[index]?.age || ""}
                          onChange={(e) =>
                            handlePassengerChange(index, "age", e.target.value)
                          }
                          required
                          min={5}
                          max={75}
                          className="form-input"
                        />
                        <select
                          value={passengers[index]?.gender || ""}
                          onChange={(e) =>
                            handlePassengerChange(
                              index,
                              "gender",
                              e.target.value
                            )
                          }
                          className="form-select"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <input
                          type="text"
                          placeholder={`Address of Passenger ${index + 1}`}
                          value={passengers[index]?.address || ""}
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            if (/^[a-zA-Z0-9\s,-]+$/.test(inputValue)) {
                              handlePassengerChange(
                                index,
                                "address",
                                inputValue
                              );
                            }
                          }}
                          required
                          className="form-input"
                        />
                      </div>
                    ))}

                    <button className="btn-pri bg-[#27374D]">
                      Book Ticket
                    </button>
                    <button
                      onClick={() => setSelectedTrain(null)}
                      className="btn-sec"
                    >
                      Back to Train Details
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <h1 className="heading">Train List</h1>
                  <table className="train-table">
                    <thead>
                      <tr>
                        <th>Train ID</th>
                        <th>Name</th>
                        <th>Departure</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trains.map((train) => (
                        <tr key={train.id}>
                          <td>{train.id}</td>
                          <td>{train.name}</td>
                          <td>{train.departure_time}</td>
                          <td>
                            <button
                              onClick={() => setSelectedTrain(train)}
                              className="btn-pri"
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <Text/>
        <Footer />
    
    </>
  );
}

export default Bok;
