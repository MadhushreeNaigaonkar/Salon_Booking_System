import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdatePass() {
   const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    prev_password: "",
    new_password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/updatepwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message);
        console.log('Password update successful. Server response:', data);
        history("/login");
      } else {
        console.error('Password update failed. Server response:', data);
        setMessage('Password update failed. Please try again.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage('Password update failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Update Password</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="prev_password" className="form-label">
                    Previous Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="prev_password"
                    name="prev_password"
                    value={formData.prev_password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="new_password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="new_password"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
    {/**        {message && <p className={data && data.status === 200 ? "text-success" : "text-danger"}>{message}</p>}*/} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
