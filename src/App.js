import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const YourComponent = () => {
  const [formData, setFormData] = useState({
    logoUrl: '',
    buttonText: '',
    userEmail: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('https://digilab-backend-qz1q.onrender.com/api/settings', formData);

      // Handle the response as needed
      alert("data updated");
      console.log('Settings updated successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error updating settings:', error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Logo URL:
        <input type="text" name="logoUrl" value={formData.logoUrl} onChange={handleInputChange} />
      </label>
      <label>
        Button Text:
        <input type="text" name="buttonText" value={formData.buttonText} onChange={handleInputChange} />
      </label>
      <label>
        User Email:
        <input type="text" name="userEmail" value={formData.userEmail} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
