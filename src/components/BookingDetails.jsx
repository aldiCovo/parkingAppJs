import React from 'react';
import './BookingDetails.css';

const BookingDetails = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="booking-details">
      <h2>Detail Booking</h2>
      <p><span>Nama:</span> {booking.name}</p>
      <p><span>Nomor Kendaraan:</span> {booking.vehicle}</p>
      <p><span>Durasi Parkir:</span> {booking.duration} jam</p>
    </div>
  );
};

export default BookingDetails;