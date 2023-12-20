import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
import {
  Alert,
} from 'react-bootstrap';
import Sc from "../../cmncomp/Sc"
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import c3 from './img/c3.jpg';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBIcon
} from 'mdb-react-ui-kit';
import Textss from '../../cmncomp/Textss';
import Footer from '../../cmncomp/Footer';

const options = [
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Vellore', label: 'Vellore' },
  // Add more options as needed
];

const Fnt = () => {
  const [fromStation, setFromStation] = useState('');
  const [destStation, setDestStation] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = async () => {
    if (!fromStation || !destStation) {
      setAlertMessage('Source and destination cannot be empty.');
      return;
    }

    if (fromStation === destStation) {
      setAlertMessage('Source and destination cannot be the same.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8081/search?from=${fromStation}&dest=${destStation}`);
      const data = await response.json();

      if (data.length === 0) {
        setAlertMessage('No matching results found in the database.');
        setShowResults(false);
      } else {
        setResults(data);
        setShowResults(true);
        setAlertMessage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  axios.defaults.withCredentials = true;

  const [isSwapped, setIsSwapped] = useState(false);
  const handleSwapClick = () => {
    const temp = fromStation;
    setFromStation(destStation);
    setDestStation(temp);
    setIsSwapped(!isSwapped);
  };

  return (
    <>
      <Sc />

      <div
        className="min-h-screen d-flex justify-content-center align-items-center  pb-lg-5 pt-lg-5"
        style={{
          backgroundImage: `url(${c3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 text-white text-center rounded-3 align-items-center">
          <h1 className="display-3">FIND MY TRAIN</h1>
          <p className="lead">
            <div className="p-4">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="form-group">
                      <label htmlFor="source" className="col-form-label font-weight-bold">
                        Source :
                      </label>
                      <CreatableSelect
                        className="select-field form-select"
                        options={options}
                        isClearable
                        onChange={(selectedOption) => setFromStation(selectedOption ? selectedOption.value : '')}
                        value={options.find((option) => option.value === fromStation)}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="form-group">
                      <label htmlFor="destination" className="col-form-label font-weight-bold">
                        Destination :
                      </label>
                      <CreatableSelect
                        className="select-field form-select"
                        options={options}
                        isClearable
                        onChange={(selectedOption) => setDestStation(selectedOption ? selectedOption.value : '')}
                        value={options.find((option) => option.value === destStation)}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleSearch}>Search</button>
              <button className="bg-white text-black rounded-5 py-2 px-4 ml-2 focus:outline-none" onClick={handleSwapClick}>Swap</button>
            </div>
          </p>
        </div>
      </div>

      {alertMessage && (
  <Alert variant="danger" onClose={() => setAlertMessage('')} dismissible>
    {alertMessage}
  </Alert>
)}

      {showResults && (
        <section className="vh-10" style={{ backgroundColor: '#5f59f7' }}>
          <h3 className='text-light display-3 text-center'>Search Results:</h3>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol xl="10">
                <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="p-4">
                    <MDBCardText className="small">
                      <MDBIcon far icon="star" size="lg" />
                      <strong>
                        <ul>
                          <h2>Search Results:</h2>
                          {results.length > 0 && (
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Train Number</th>
                                  <th>Train Name</th>
                                  <th>Departure Time</th>
                                  <th>Arrival Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                {results.map((train) => (
                                  <tr key={train.train_number}>
                                    <td>{train.train_number}</td>
                                    <td>{train.train_name}</td>
                                    <td>{train.departure_time}</td>
                                    <td>{train.arrival_time}</td>
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
      )}
      <Textss />
      <Footer />
    </>
  );
}

export default Fnt;
