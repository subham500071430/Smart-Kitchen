import React, { useState } from 'react';
import getUser from './Service/userService';
import validateUser from './Service/userService';

const MyForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    email_id: '',
    password: '',
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

    validateUser(jsonData);
    console.log(jsonData); // You can send this JSON to an API
  };

  return (
    <div class="loginApp">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            email_id:
            <input
              type="email"
              name="email_id"
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
