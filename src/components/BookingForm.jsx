import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", vehicle: "", duration: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi: Mengecek apakah ada field yang kosong
    if (!formData.name || !formData.vehicle || !formData.duration) {
      alert("Data belum lengkap. Silakan mengisi seluruh data yang dibutuhkan.");
      return;
    }

    // Jika semua data sudah lengkap, kirim form
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Nama" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        name="vehicle" 
        placeholder="Nomor Kendaraan" 
        value={formData.vehicle} 
        onChange={handleChange} 
      />
      <input 
        name="duration" 
        placeholder="Durasi Parkir (jam)" 
        value={formData.duration} 
        onChange={handleChange} 
      />
      <button type="submit">Pesan</button>
    </form>
  );
};

export default BookingForm;
