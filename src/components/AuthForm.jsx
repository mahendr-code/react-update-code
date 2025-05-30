import React, { useState, useRef } from 'react';
import './AuthForm.css';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginUserMutation, useRegisterUserMutation } from './authApi';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  // Login refs
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  // Register refs
  const nameRef = useRef();
  const phoneRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();
  const genderRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      const res = await loginUser({ email, password }).unwrap();
      const token = res?.data?.token;
      const user = res?.data;

      if (!token) throw new Error('Don’t have any Account.');

      localStorage.setItem('authToken', token);
      localStorage.setItem('userInfo', JSON.stringify(user));
      dispatch(setCredentials({ token, user }));

      navigate('/');
    } catch (err) {
      alert(err?.data?.message || err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = regEmailRef.current.value;
    const password = regPasswordRef.current.value;
    const gender = genderRef.current.value;

    if (!name || !phone || !email || !password || !gender) {
      alert('Please fill all fields.');
      return;
    }

    try {
      const res = await registerUser({ name, phone, email, password, gender }).unwrap();
      alert(res.message || 'Registration successful! You can now log in.');
      setIsLogin(true);

      // Optionally clear fields
      nameRef.current.value = '';
      phoneRef.current.value = '';
      regEmailRef.current.value = '';
      regPasswordRef.current.value = '';
      genderRef.current.value = '';
    } catch (err) {
      alert(err?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${!isLogin ? 'active' : ''}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={loginHandler}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="email" placeholder="Email" required ref={loginEmailRef} />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required ref={loginPasswordRef} />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? <span><span className="spinner" /> Logging in...</span> : 'Login'}
            </button>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Full Name" required ref={nameRef} />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="tel" placeholder="Phone Number" required ref={phoneRef} />
              <i className='bx bxs-phone'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required ref={regEmailRef} />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required ref={regPasswordRef} />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="select-box">
              <select ref={genderRef} required>
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
              <i className='bx bxs-user-detail'></i>
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don’t have an account?</p>
            <button className="btn" onClick={() => setIsLogin(false)}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn" onClick={() => setIsLogin(true)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
