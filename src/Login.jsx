import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const url = 'http://tutorials.codebetter.in:7084/auth/login';

  const handleForm = async (e) => {
    e.preventDefault();
    const email = EmailRef.current.value;
    const password = PasswordRef.current.value;

    try {
      const response = await axios.post(url, { email, password });
      alert(response.data.message);

      const token = response.data?.data?.token;
      if (token) {
        localStorage.setItem('authToken', token);
        navigate('/');
        EmailRef.current.value = '';
        PasswordRef.current.value = '';
      } else {
        alert('Invalid token received.');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg p-4 mb-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              ref={EmailRef}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              ref={PasswordRef}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
