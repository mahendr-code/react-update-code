import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Raining Offers For <br /> Hot Summer!</h1>
          <h4><span>25% Off</span> On All Products</h4>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/products" className="btn-secondary">Find More</Link>
          </div>
        </div>
      </section>
      {/* About Section */}
{/* About Section */}
<section className="about">
  <h2>About SREE Concerns</h2>
  <p>
    SREE Concerns is dedicated to providing high-quality, stylish, and affordable products for every lifestyle.
    With a focus on customer satisfaction, we bring you trending products backed by reliable support.
  </p>

  {/* Auto-scrolling Image Slider */}
  <div className="image-slider">
    <div className="slider-track">
      <img src="/about 2.jpg" alt="About 1" />
      <img src="/about 3.jpg" alt="About 2" />
      <img src="/about 4.png" alt="About 3" />
      <img src="/about 5.png" alt="About 4" />
      {/* Repeat to make loop smooth */}
      <img src="/about 2.jpg" alt="About 1" />
      <img src="/about 3.jpg" alt="About 2" />
      <img src="/about 4.png" alt="About 3" />
      <img src="/about 5.png" alt="About 4" />
    </div>
  </div>
</section>


      {/* Our Products */}
      <section className="products">
        <h2>Our  Tranding Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="home p1.webp" alt="Product 1" />
            <h3>ROASTER Stylish Multi Sports</h3>
            <p>Rs. 1,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
            <div className="product-card">
            <img src="home p1.webp" alt="Product 1" />
            <h3>ROASTER Stylish Multi Sports</h3>
            <p>Rs. 1,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
            <div className="product-card">
            <img src="home p1.webp" alt="Product 1" />
            <h3>ROASTER Stylish Multi Sports</h3>
            <p>Rs. 1,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
      
          <div className="product-card">
            <img src="home p2.png" alt="Product 2" />
            <h3>Modern Watch</h3>
            <p>Rs. 2,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
          <div className="product-card">
            <img src="home p3.jpg" alt="Product 3" />
            <h3>ASIAN Men's MEXICO</h3>
            <p>Rs. 3,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
          <div className="product-card">
            <img src="home p4.webp" alt="Product 4" />
            <h3>Soni Headphone</h3>
            <p>Rs. 4,999</p>
            <Link to="/products" className="btn-secondary">View More</Link>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature-box">
          <i className="bx bx-truck"></i>
          <h4>Free Shipping</h4>
          <p>On all orders above Rs. 500</p>
        </div>
        <div className="feature-box">
          <i className="bx bx-lock"></i>
          <h4>Secure Payment</h4>
          <p>100% secure payment</p>
        </div>
        <div className="feature-box">
          <i className="bx bx-support"></i>
          <h4>24/7 Support</h4>
          <p>Instant help & chat</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Subscribe To Our Newsletter</h2>
        <p>Get all the latest updates, deals, and more!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>SREE Concerns</h3>
            <p>Quality furniture, unbeatable value.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: info@sreeconcerns.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 SREE Concerns. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
