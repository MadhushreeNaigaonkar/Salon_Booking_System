import React, { useReducer } from "react";
import axios from "axios";
import Landing from "./Landing";

export default function Register() {
  const init = {
    name: { value: "", valid: "false", touched: false, error: "" },
    address: { value: "", valid: "false", touched: false, error: "" },
    email: { value: "", valid: "false", touched: false, error: "" },
    password: { value: "", valid: "false", touched: false, error: "" },
    phone: { value: "", valid: "false", touched: false, error: "" },
    formValid: false,
    message: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };

      case "reset":
        return init;

      case "setMessage":
        return { ...state, message: action.message };
    }
  };

  const [user, dispatch] = useReducer(reducer, init);

  const validData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "name":
        var pattern = /^[A-Za-z]+$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Name should contain alphabets only";
        }
        break;

      case "address":
        var pattern = /^[A-Za-z0-9,.\s]+$/;
        if (!pattern.test(val)) {
          valid = false;
          error =
            "Address should be in house no, house name, area,landmark,city";
        }
        break;
      case "email":
        var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "email should be in small letters and should contain @";
        }
        break;
      case "password":
        var pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        if (!pattern.test(val)) {
          valid = false;
          error =
            "password should be more tha 8 characters less than 15 characters should contain Capital letters,small letters and special symbols";
        }
        break;
      case "phone":
        var pattern = /^\d{10}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "enter 10 digit valid phone no";
        }
        break;
    }
    return { valid: valid, error: error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validData(key, value);
    let formValid = true;
    for (let k in user) {
      if (user[k].valid === false) {
        formValid = false;
        break;
      }
    }
    dispatch({
      type: "update",
      data: { key, value, touched: true, valid, error, formValid },
    });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: user.name.value,
        address: user.address.value,
        email: user.email.value,
        password: user.password.value,
      });
      if (response.status === 200) {
        dispatch({ type: "setMessage", message: "Registration successful!" });

        showAlert();
      } else {
        dispatch({
          type: "setMessage",
          message: "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      dispatch({
        type: "setMessage",
        message: "Registration failed. Please try again.",
      });
    }
  };
  const showAlert = () => {
    window.alert("Registration successful!");
  };

  return (
    <>
      <Landing />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Register</h3>
                <form onSubmit={submitData}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        user.name.touched && !user.name.valid
                          ? "is-invalid"
                          : ""
                      }`}
                      id="name"
                      id="name"
                      name="name"
                      value={user.name.value}
                      onChange={(e) => {
                        handleChange("name", e.target.value);
                      }}
                      onBlur={(e) => {
                        handleChange("name", e.target.value);
                      }}
                      required
                    />
                    {user.name.touched && !user.name.valid && (
                      <div className="invalid-feedback">{user.name.error}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={user.phone.value}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={user.address.value}
                      onChange={(e) => handleChange("address", e.target.value)}
                      onBlur={(e) => handleChange("address", e.target.value)}
                      required
                    />
                    {user.address.touched && !user.address.valid && (
                      <div className="invalid-feedback">
                        {user.address.error}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email.value}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={(e) => handleChange("email", e.target.value)}
                      required
                    />
                    {user.email.touched && !user.email.valid && (
                      <div className="invalid-feedback">{user.email.error}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password.value}
                      onChange={(e) => handleChange("password", e.target.value)}
                      onBlur={(e) => handleChange("password", e.target.value)}
                      required
                    />
                    {user.password.touched && !user.password.valid && (
                      <div className="invalid-feedback">
                        {user.password.error}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                {user.message && (
                  <p className="text-center mt-3">{user.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
