import React, { useState } from "react";
import "../components/Forgetpsw.css"; 

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Basic validation for email
  const validate = () => {
    let valid = true;
    let errors = "";

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email) {
      errors = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      errors = "Please enter a valid email address.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Email submitted successfully!");
      setSuccessMessage("Password reset link has been sent to your email!");

      setEmail("");

    } else {
      console.log("Form validation failed.");
      setSuccessMessage(""); 
    }
  };

  return (
    <div className="forget-password-container">
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        {successMessage && <p className="success">{successMessage}</p>} 

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
          />
          {errors && <p className="error">{errors}</p>}
        </div>

        <div className="input-group">
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </div>

        <div className="login-link">
          <p>Remember your password? <a href="/">Login here</a></p>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
