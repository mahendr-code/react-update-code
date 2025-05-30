// src/pages/Orders.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Orders = () => {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="container shadow-lg rounded" style={{ marginTop: '100px', paddingTop: '20px' }}>
      <h3>My Orders</h3>
      {product ? (
        <div className="card p-3 mt-3">
          <h5>{product.name}</h5>
          <p>Price: ₹{product.price}</p>
          <p>Status: Paid</p>
        </div>
      ) : (
        <p>You have no recent orders.</p>
      )}
    </div>
  );
};

export default Orders;
