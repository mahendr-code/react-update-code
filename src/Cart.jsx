import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.css'

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
clearCart
} from './cartSlice';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // Individual buy function for one product
  const handleBuyProduct = (item) => {
    alert(`"Thank you for shopping with Sree Concerns!" ${item.name} for ₹${(item.price * item.quantity).toFixed(2)}!`);
    // Aap yahan payment ya order processing logic daal sakte hain

    // Optionally, remove that product from cart after purchase
    dispatch(removeFromCart(item.id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
<div className="container shadow-lg rounded" style={{ marginTop: '100px', paddingTop: '20px' }}>

      <h2 className="mb-3 text-center">Cart</h2>
  
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
        
      ) : (
        <>
          <button className='btn btn-sm btn-outline-danger ms-2 bg-transparent text-danger btn-hover' onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        –
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-success ms-2"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-success btn-sm mt-2"
                      onClick={() => {
                        handleBuyProduct(item);
                        navigate('/payment', { state: { product: item } });
                      }}
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-end fw-bold">Cart Total</td>
                <td colSpan="2" className="fw-bold">₹{cartTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    
    </div>
  );
};

export default Cart;
