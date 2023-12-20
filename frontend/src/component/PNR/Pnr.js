import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Sc from '../../cmncomp/Sc';
import Footer from '../../cmncomp/Footer';
import Textss from '../../cmncomp/Textss';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingDetailsWithPDF() {
  const [bookingId, setBookingId] = useState('');
  const [data, setData] = useState(null);
  const [trainDetails, setTrainDetails] = useState(null);

  const handleFetchData = () => {
    if (!bookingId) {
      alert('Please enter a valid PNR number');
    } else {
      fetch(`http://localhost:8081/bookings/${bookingId}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data || !data.booking) {
            alert('No data found for the provided PNR. Please enter a valid PNR number');
          } else {
            setData(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  const handleDownloadPDF = () => {
    if (!bookingId) {
      alert('Please enter a valid PNR number');
    } else if (!data) {
      alert('No data available to download');
    } else {
      const doc = new jsPDF();
      let yPos = 10;

      // Add content to the PDF
      const addContent = (title, content) => {
        doc.text(String(title), 10, yPos);
        yPos += 10;
        doc.text(String(content), 10, yPos);
        yPos += 20;
      };
      

      addContent('Booking Information', '');
      addContent('Pnr no:', bookingId);
      addContent('Source:', data.booking.source);
      addContent('Destination:', data.booking.destination);
      addContent('Train ID:', data.booking.train_id);
      addContent('Date of journey:', data.booking.booking_date);
      addContent('No of seats:', data.booking.seat_count);
      addContent('Price:', data.booking.total_sum);

      if (trainDetails) {
        addContent('Train Information', '');
        addContent('Train Name:', trainDetails.name);
        addContent('Departure Time:', trainDetails.departure_time);
        addContent('Arrival Time:', trainDetails.arrival_time);
      }

      addContent('Passenger Information', '');

      // Create a data array for passengers
      const passengerData = data.passengers.map((passenger) => [
        passenger.name,
        passenger.age,
        passenger.seat_class,
        passenger.seat_number,
        passenger.seat_type,
      ]);

      // Set up the table
      doc.autoTable({
        head: [['Name', 'Age', 'Coach Type', 'Seat Number', 'Seat Type']],
        body: passengerData,
        startY: yPos + 10,
      });

      doc.save('booking_details.pdf');
    }
  };

  useEffect(() => {
    if (data && data.booking) {
      (async () => {
        try {
          const response = await fetch(`http://localhost:8081/trains/${data.booking.train_id}`);
          if (!response.ok) {
            throw new Error(`Error fetching train details: ${response.statusText}`);
          }
          const trainData = await response.json();
          setTrainDetails(trainData);
        } catch (error) {
          console.error('Error fetching train details:', error);
        }
      })();
    }
  }, [data]);

  return (
    <>
      <div>
        <Sc />
      </div>
      <div className="container mt-5 text-center">
        <h1 className="w-50 mx-auto">Booking Details</h1>
        <label className='font-weight-bold'>
          PNR NO:
          <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} />
        </label>
        <button className="btn btn-primary btn-lg" onClick={handleFetchData}>Fetch Data</button>

        {data && (
          <div>
            <h2>Booking Information</h2>
            <table className="table mx-auto">
              <tbody>
                <tr>
                  <td>Pnr no:</td>
                  <td>{data.booking.booking_id}</td>
                </tr>
                <tr>
                  <td>Source:</td>
                  <td>{data.booking.source}</td>
                </tr>
                <tr>
                  <td>Destination:</td>
                  <td>{data.booking.destination}</td>
                </tr>
                <tr>
                  <td>Train ID:</td>
                  <td>{data.booking.train_id}</td>
                </tr>
                <tr>
                  <td>Date of journey:</td>
                  <td>{data.booking.booking_date}</td>
                </tr>
                <tr>
                  <td>No of seats:</td>
                  <td>{data.booking.seat_count}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{data.booking.total_sum}</td>
                </tr>
              </tbody>
            </table>

            {trainDetails && (
              <div>
                <h2>Train Information</h2>
                <table className="table mx-auto">
                  <tbody>
                    <tr>
                      <td>Train Name:</td>
                      <td>{trainDetails.name}</td>
                    </tr>
                    <tr>
                      <td>Departure Time:</td>
                      <td>{trainDetails.departure_time}</td>
                    </tr>
                    <tr>
                      <td>Arrival Time:</td>
                      <td>{trainDetails.arrival_time}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <h2>Passenger Information</h2>
            <table className="table mx-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Coach Type</th>
                  <th>Seat Number</th>
                  <th>Seat Type</th>
                </tr>
              </thead>
              <tbody>
                {data.passengers.map((passenger, index) => (
                  <tr key={index}>
                    <td>{passenger.name}</td>
                    <td>{passenger.age}</td>
                    <td>{passenger.seat_class}</td>
                    <td>{passenger.seat_number}</td>
                    <td>{passenger.seat_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='pt-3  flex justify-center'>
              <button onClick={handleDownloadPDF} className="btn btn-primary btn-lg">Download PDF</button>
            </div>
          </div>
        )}
      </div>
      <Textss />
      <Footer />
    </>
  );
}

export default BookingDetailsWithPDF;
