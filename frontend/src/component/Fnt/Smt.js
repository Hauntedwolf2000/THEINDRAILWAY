import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c3 from './img/c3.jpg';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import Textss from '../../cmncomp/Textss';
import Footer from '../../cmncomp/Footer';
import Sc from "../../cmncomp/Sc"

const Smt = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [trainDetails, setTrainDetails] = useState(null);
  const [intermediateStops, setIntermediateStops] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = async () => {
    if (!trainNumber) {
      setAlertMessage('Train number cannot be empty.');
      setTrainDetails(null);
      setIntermediateStops([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8081/train/${trainNumber}`);
      const data = await response.json();

      if (data.length === 0) {
        setAlertMessage('Train not found in the database.');
        setTrainDetails(null);
        setIntermediateStops([]);
      } else {
        setTrainDetails(data[0]);
        fetchIntermediateStops(data[0].train_number);
        setAlertMessage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAlertMessage('Error fetching data. Please try again later.');
    }
  };

  const fetchIntermediateStops = async (trainNumber) => {
    try {
      const response = await fetch(`http://localhost:8081/intermediate/${trainNumber}`);
      const data = await response.json();
      setIntermediateStops(data);
    } catch (error) {
      console.error('Error fetching intermediate stops:', error);
    }
  };


 


  return (
    <>
      <Sc/>

      <div
        className="min-h-screen d-flex justify-content-center align-items-center pb-lg-5 pt-lg-5"
        style={{
          backgroundImage: `url(${c3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 text-white text-center rounded-3 align-items-center">
          <h1 className="display-3">SEARCH MY TRAIN</h1>
          <p className="lead">
            <div className="p-4">
              <div className="mb-4">
                <label htmlFor="source" className="block mb-1 pe-4 font-bold">
                  Train no:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 ms-4 rounded"
                  placeholder="Enter Train Number(eg:123)"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleSearch}>Search</button>
            </div>
          </p>
        </div>
      </div>

      {alertMessage && (
        <Alert variant="danger" onClose={() => setAlertMessage('')} dismissible>
          {alertMessage}
        </Alert>
      )}
      
      <section className="vh-10" style={{ backgroundColor: '#5f59f7' }}>
        <h3 className='text-light display-3 text-center'>Search Results:</h3>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol xl="10">
              <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                  <MDBCardText className="small">
                    <MDBIcon far icon="star" size="lg" />
                    <strong><ul>
                      <h2>Train Details</h2>
                      {trainDetails && (
                        <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Train No</th>
                            <th>Train Name</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{trainDetails.train_number}</td>
                            <td>{trainDetails.train_name}</td>
                            <td>{trainDetails.departure_time}</td>
                            <td>{trainDetails.arrival_time}</td>
                          </tr>
                        </tbody>
                      </table>
                      )}
                    </ul></strong>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                  <MDBCardText className="small">
                    <MDBIcon far icon="star" size="lg" />
                    <strong>
    <ul>
      <h2>Intermediate Stops</h2>
      {intermediateStops.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Station Name</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {intermediateStops.map((stop) => (
              <tr key={stop.stop_id}>
                <td>{stop.station_name}</td>
                <td>{stop.arrival_time}</td>
                <td>{stop.departure_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </ul>
  </strong>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Textss />
      <Footer />
    </>
  );
};

export default Smt;
