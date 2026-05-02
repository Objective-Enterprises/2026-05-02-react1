import React, { useState } from 'react';
import "./Auth.css";
import heroImage from "../../assets/login-hero.jpg";

function Login() {
  // Define relevant state variables for login form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Implement logic to print it on console and success on alert
    console.log('email', email)
    console.log('password', password)
    alert('Success')
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-form-side">
          <div className="auth-content">
            <h2>Login</h2>
            <p className="auth-subtitle">Welcome back! Please enter your details.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Email'
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='Password'
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Submit</button>
              
              <div className="social-login">
                <button type="button" className="social-btn">Apple</button>
                <button type="button" className="social-btn">Google</button>
              </div>
            </form>

            <div className="auth-footer-links">
              <span>Don't have an account? <a href="#">Sign up</a></span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        
        <div className="auth-image-side">
          <img src={heroImage} alt="Workspace" />
        </div>
      </div>
    </div>
  );
}

export default Login;