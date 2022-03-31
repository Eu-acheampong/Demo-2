import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="form">
      <div className="container">
        <h3>Enter your details...</h3>
        <form>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

