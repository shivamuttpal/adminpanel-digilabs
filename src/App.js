import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const YourComponent = () => {

  const [emails, setEmails] = useState([]);



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

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://digilab-backend-qz1q.onrender.com/api/emails');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='bigContainer'>
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
      <div className="emails-table">
        <h2>Emails List</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((emailObj, index) => (
              <tr key={index}>
                <td>{emailObj.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default YourComponent;
