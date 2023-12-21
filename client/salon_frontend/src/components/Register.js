import React, { useReducer } from "react";
import axios from "axios";

export default function Register() {
  const init = {
    name: { value: "", valid: "false", touched: false, error: "" },
    address: { value: "", valid: "false", touched: false, error: "" },
    email: { value: "", valid: "false", touched: false, error: "" },
    password: { value: "", valid: "false", touched: false, error: "" },
    formValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { vlaue, touched, valid, error }, formValid };

      case "reset":
        return init;
    }
  };

  const [user, dispatch] = useReducer(reducer, init);

  const validData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "name":
        var pattern=//
        if(!pattern.test(val)){
          valid=false;
          error="Name should contain alphabets only"
        }
        break;

      case "address":
        var pattern=//
        if(!pattern.test(val)){
          valid=false;
          error="Address should be in house no, house name, area,landmark,city";

        }
        break;
      case "email":
        var pattern=//
        if(!pattern.test(val)){
          valid=false;
          error="email should be in small letters and should contain @";
        }
        break;
        case "password":
        var pattern=//
        if(!pattern.test(val)){
          valid=false;
          error="password should be more tha 8 characters less than 15 characters should contain Capital letters,small letters and special symbols";
        }
        break;
    }
    return{valid:valid,error:error}
  };

  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Register</h3>
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
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
                    //   value={formData.address}
                    //   onChange={handleChange}
                    required
                  />
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
                    //   value={formData.email}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    //   value={formData.password}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
