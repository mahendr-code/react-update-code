import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { FaUserCircle } from 'react-icons/fa'; // 👈 FontAwesome user icon

const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('authToken');
    const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const logout = () => {
    localStorage.removeItem('authToken');
    alert("Logout successful");
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light px-4 shadow-sm custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src="/SC.jpg" alt="Logo" height="50" className="me-2" />
          SREE Concerns
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {isLogin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
              </>
            )}

         {isLogin && (
  <>
    
  </>
)}

          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Profile or Login */}
          <ul className="navbar-nav">
            {isLogin ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* Creative profile icon */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg,rgb(133, 154, 201) 0%,rgb(131, 176, 255) 100%)',
                      color: '#fff',
                      marginRight: 8,
                      boxShadow: '0 2px 8px rgba(106,17,203,0.15)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="4" fill="#fff" fillOpacity="0.8"/>
                      <ellipse cx="10" cy="15" rx="6" ry="3" fill="#fff" fillOpacity="0.8"/>
                    </svg>
                  </span>
                  Profile
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">View Profile</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/orders">My Orders</Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>Logout</button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-primary ms-2" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
