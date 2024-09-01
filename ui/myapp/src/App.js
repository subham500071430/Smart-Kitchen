import React, { useState } from 'react';
import getUser from './Service/userService';

const MyForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the form data to JSON
    const jsonData = JSON.stringify(formData);

    getUser();
    console.log(jsonData); // You can send this JSON to an API
  };

  return (
    <div class="loginApp">
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          userid:
          <input
            type="email"
            name="userid"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default MyForm;
