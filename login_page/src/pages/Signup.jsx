import React, { useState } from "react";
import "../components/Signup.css"; 

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Basic validation function
  const validate = () => {
    let valid = true;
    let errors = {};

    // Username validation
    if (!username) {
      errors.username = "Username is required.";
      valid = false;
    }

    
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address.";
      valid = false;
    }

  
    if (!password) {
      errors.password = "Password is required.";
      valid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
      valid = false;
    }

    
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
      valid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully!");

      setSuccessMessage("Sign-Up Successful!");

      
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    
    } else {
      console.log("Form validation failed.");
      setSuccessMessage(""); 
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {successMessage && <p className="success">{successMessage}</p>} 

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your username"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <div className="input-group">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>

        <div className="sign-in-link">
          <p>Already have an account? <a href="/">Login here</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
