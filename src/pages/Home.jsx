import React, { useState } from "react";
import ParkingMap from "../components/ParkingMap";
import BookingForm from "../components/BookingForm";
import BookingDetails from "../components/BookingDetails";
import "./Home.css";

const Home = () => {
  // Generate parking slots
  const generateParkingSlots = () => {
    const rowsGroup1 = ["A", "B"]; // Baris A dan B
    const rowsGroup2 = ["C", "D"]; // Baris C dan D
    const slotsPerRow = 4; // 4 slot per baris
    const slotSize = 60; // Ukuran slot
    const parkingSlots = [];

    // Kelompok pertama: A1 - B4
    rowsGroup1.forEach((row, rowIndex) => {
      for (let i = 1; i <= slotsPerRow; i++) {
        const id = `${row}${i}`;
        parkingSlots.push({
          id,
          x: slotSize * (i - 1) + 10, // Horizontal
          y: slotSize * rowIndex + 10, // Vertikal
          isAvailable: true, // Default ke tersedia
        });
      }
    });

    // Kelompok kedua: C1 - D4 (di bawah jalan akses)
    rowsGroup2.forEach((row, rowIndex) => {
      for (let i = 1; i <= slotsPerRow; i++) {
        const id = `${row}${i}`;
        parkingSlots.push({
          id,
          x: slotSize * (i - 1) + 10, // Horizontal
          y: slotSize * rowIndex + 10 + slotSize * 2 + 30, // Vertikal (terpisah jalan)
          isAvailable: true, // Default ke tersedia
        });
      }
    });

    return parkingSlots;
  };

  const [parkingSlots, setParkingSlots] = useState(generateParkingSlots());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleSlotClick = (slot) => {
    if (!slot.isAvailable) {
      alert("Tempat parkir ini sudah terisi.");
      return;
    }
    setSelectedSlot(slot);
  };

  const handleBookingSubmit = (formData) => {
    const updatedSlots = parkingSlots.map((slot) =>
      slot.id === selectedSlot.id ? { ...slot, isAvailable: false } : slot
    );
    setParkingSlots(updatedSlots);
    setBooking({ ...formData, slotId: selectedSlot.id });
    setSelectedSlot(null);
  };

  return (
    <div className="home">
      <h1>Sistem Pengelolaan Parkiran</h1>
      <div className="stage-container">
        <ParkingMap parkingSlots={parkingSlots} onSlotClick={handleSlotClick} />
      </div>
      {selectedSlot && <BookingForm onSubmit={handleBookingSubmit} />}
      <BookingDetails booking={booking} />
    </div>
  );
};

export default Home;
