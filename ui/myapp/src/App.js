import React, { useState } from 'react';
import validateUser from './Service/userService';

const MyForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    email_id: '',
    password: '',
  });

  const [login, setlogin] = useState(false);

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert the form data to JSON
    const jsonData = JSON.stringify(formData);

    try {
      const result = await validateUser(jsonData);
      setlogin(result);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }

  };

  if (login) {

    return (

      <div>
        <p>login successfull</p>
      </div>
    )

  } else {

    return (
      <div classname="loginApp">
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
  }
};

export default MyForm;
