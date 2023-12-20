import React, { useEffect, useState } from 'react';
import Sc from '../../cmncomp/Sc';
import Footer from '../../cmncomp/Footer';
import Textss from '../../cmncomp/Textss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Cancel() {
  const [bookingId, setBookingId] = useState('');
  const [data, setData] = useState(null);
  const [trainDetails, setTrainDetails] = useState(null);
  const [dataNotFound, setDataNotFound] = useState(false);

  const handleFetchData = () => {
    if (!bookingId) {
      window.alert('Please enter a valid PNR number');
    } else {
      // Fetch data if the input is provided
      axios
        .get(`http://localhost:8081/bookings/${bookingId}`)
        .then((response) => {
          setData(response.data);
          setDataNotFound(false); // Reset the dataNotFound flag
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setDataNotFound(true); // Set dataNotFound flag if there is an error
        });
    }
  };

  const handleDeleteBooking = () => {
    if (!data || !data.booking) return;

    const { booking_id } = data.booking;

    // Ask for confirmation before deleting
    const confirmed = window.confirm('Are you sure you want to delete this booking?. Once cancelled Your money is non-refundable');

    if (confirmed) {
      axios
        .delete(`http://localhost:8081/bookings/${booking_id}`)
        .then((response) => {
          // Insert the booking_id into booking_status with status "cancelled"
          axios
            .post(`http://localhost:8081/booking_status`, { booking_id, status: 'cancelled' })
            .then(() => {
              alert('Booking deleted successfully. ');
              // You can also clear the data or perform any other necessary action here.
              setData(null);
            })
            .catch((error) => {
              console.error('Error inserting booking_id into booking_status:', error);
            });
        })
        .catch((error) => {
          console.error('Error deleting booking:', error);
        });
    }
  };

  useEffect(() => {
    if (data && data.booking) {
      axios
        .get(`http://localhost:8081/trains/${data.booking.train_id}`)
        .then((response) => {
          setTrainDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching train details:', error);
        });
    }
  }, [data]);

  return (
    <>
      <div>
        <Sc />
      </div>
      <div className="container mt-5 text-center">
        <h1 className="w-50 mx-auto">TIKET CANCELLING</h1>
        <p className="font-weight-bold mx-auto">Once the ticket is cancelled, non-refundable</p>
        <label className="font-weight-bold">
          PNR NO:
          <input
            type="text"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />
        </label>
        <button className="btn btn-primary btn-lg" onClick={handleFetchData}>
          Fetch Data
        </button>

        {dataNotFound && (
          <p>Data doesn't exist for the provided PNR number.</p>
        )}

        {data && !dataNotFound && (
          <div>
            <h4>Booking Information</h4>
            <table className="table table-bordered mx-auto">
              <tbody>
                <tr>
                  <td className="text-left font-weight-bold">Pnr no:</td>
                  <td className="text-left">{data.booking.booking_id}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">Source:</td>
                  <td className="text-left">{data.booking.source}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">Destination:</td>
                  <td className="text-left">{data.booking.destination}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">Train ID:</td>
                  <td className="text-left">{data.booking.train_id}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">Date of journey:</td>
                  <td className="text-left">{data.booking.booking_date}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">No of seats:</td>
                  <td className="text-left">{data.booking.seat_count}</td>
                </tr>
                <tr>
                  <td className="text-left font-weight-bold">Price:</td>
                  <td className="text-left">{data.booking.total_sum}</td>
                </tr>
              </tbody>
            </table>

            {trainDetails && (
              <div>
                <h4>Train Information</h4>
                <table className="table table-bordered mx-auto">
                  <tbody>
                    <tr>
                      <td className="text-left font-weight-bold">Train Name:</td>
                      <td className="text-left">{trainDetails.name}</td>
                    </tr>
                    <tr>
                      <td className="text-left font-weight-bold">Departure Time:</td>
                      <td className="text-left">{trainDetails.departure_time}</td>
                    </tr>
                    <tr>
                      <td className="text-left font-weight-bold">Arrival Time:</td>
                      <td className="text-left">{trainDetails.arrival_time}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <h4>Passenger Information</h4>
            <table className="table table-bordered mx-auto">
              <thead>
                <tr>
                  <th className="text-left font-weight-bold">Name</th>
                  <th className="text-left font-weight-bold">Age</th>
                  <th className="text-left font-weight-bold">Coach Type</th>
                  <th className="text-left font-weight-bold">Seat Number</th>
                  <th className="text-left font-weight-bold">Seat Type</th>
                </tr>
              </thead>
              <tbody>
                {data.passengers.map((passenger, index) => (
                  <tr key={index}>
                    <td className="text-left">{passenger.name}</td>
                    <td className="text-left">{passenger.age}</td>
                    <td className="text-left">{passenger.seat_class}</td>
                    <td className="text-left">{passenger.seat_number}</td>
                    <td className="text-left">{passenger.seat_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pt-3 flex justify-center">
              <button
                onClick={handleDeleteBooking}
                className="btn btn-danger btn-lg"
              >
                Delete Booking
              </button>
            </div>
          </div>
        )}
      </div>
      <Textss />
      <Footer />
    </>
  );
}

export default Cancel;
