// import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'; 
// import "../components/Login.css"; 
// import {useNavigate} from "react-router-dom"


// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ username: "", password: "" });
//   const navigate=useNavigate();
  

//   const validate = () => {
//     let valid = true;
//     let errors = { username: "", password: "" };

//     if (!username) {
//       errors.username = "Username is required.";
//       valid = false;
//     }

//     if (!password) {
//       errors.password = "Password is required.";
//       valid = false;
//     }

//     setErrors(errors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
  
//     if (validate()) {
//       console.log("Form submitted successfully!");
      
//       setUsername("");
//       setPassword("");
      
//       // alert("Login Successful!");
//       navigate('/CalendarPage');

    
  
//     } else {
//       console.log("Form validation failed.");
//     }
//   };
  

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Type your username"
//           />
//           {errors.username && <p className="error">{errors.username}</p>}
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Type your password"
//           />
//           {errors.password && <p className="error">{errors.password}</p>}
//         </div>

//         <div className="input-group">
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </div>

//         <div className="forgot-password">
//           <a href="/forgetpassword">Forgot password?</a>
//         </div>

//         <div className="social-login">
//           <p>Or sign up using</p>
//           <div className="social-icons">
            
//             <a href="#"><FaFacebook size={20} color="#3b5998" /></a>
//             <a href="#"><FaTwitter size={20} color="#1da1f2" /></a>
//             <a href="#"><FaGoogle size={20} color="#db4437" /></a>
//            </div>
//         </div>

//         <div className="sign-up">
//           <p>Or sign up using</p>
//           <a href="/signup">Sign Up</a>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'; 
import "../components/Login.css"; 
import {useNavigate} from "react-router-dom"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    // Check if username is a valid email
    if (!username) {
      errors.username = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(username)) {
      errors.username = "Please enter a valid email address.";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      valid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully!");

      setUsername("");
      setPassword("");

      // Redirect to CalendarPage after successful login
      navigate('/CalendarPage');
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your email"
          />
          {errors.username && <p className="error">{errors.username}</p>}
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
          <button type="submit" className="login-button">
            Login
          </button>
        </div>

        <div className="forgot-password">
          <a href="/forgetpassword">Forgot password?</a>
        </div>

        <div className="social-login">
          <p>Or sign up using</p>
          <div className="social-icons">
            <a href="#"><FaFacebook size={20} color="#3b5998" /></a>
            <a href="#"><FaTwitter size={20} color="#1da1f2" /></a>
            <a href="#"><FaGoogle size={20} color="#db4437" /></a>
          </div>
        </div>

        <div className="sign-up">
          <p>Or sign up using</p>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

