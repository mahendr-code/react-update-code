// src/pages/PaymentPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handlePayment = () => {
    // ✅ Simulate a successful payment
    alert('Payment successful!');
    navigate('/orders', { state: { product } }); // ⬅️ pass product to orders page
  };

  return (
    <div className="container shadow-lg rounded" style={{ marginTop: '100px', paddingTop: '20px' }}>
      <h2 className="text-center mb-4">Payment Method</h2>
      {product ? (
        <div className="card p-4">
          <h4>Buying: {product.name}</h4>
          <p>Price: ₹{product.price}</p>
          <button className="btn btn-success mt-3" onClick={handlePayment}>
            Proceed to Pay
          </button>
        </div>
      ) : (
        <p>No product selected. Please go back to cart.</p>
      )}
    </div>
  );
};

export default PaymentPage;
