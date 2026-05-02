import React, { useState } from 'react';
import "./Auth.css";

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
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;