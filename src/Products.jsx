import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity
} from './cartSlice';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const products = [
  { id: 1, name: 'Computer', price: 500000, description: 'High-end desktop PC', image: '/products.1.jpg' },
  { id: 2, name: 'Mobile', price: 21000, description: 'Latest Android smartphone', image: '/products.4.webp' },
  { id: 3, name: 'AirPods', price: 2000, description: 'Wireless earbuds', image: '/products.3.jpg' },
  { id: 4, name: 'Laptop', price: 80000, description: 'High-performance laptop', image: '/product.9.webp' },
  { id: 5, name: 'Tablet', price: 30000, description: 'Lightweight and fast', image: '/products.webp' },
  { id: 6, name: 'Monitor', price: 15000, description: 'Full HD display', image: '/products.3.jpg' }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);

  const getQuantity = (id) => {
    const item = cartItems.find(p => p.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');  // Navigate to cart page after adding
  };

  return (
    <div className="main">
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => {
          const quantity = getQuantity(product.id);

          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top w-60 mx-auto h-50"
                  alt={product.name}
                  style={{ objectFit: 'cover', height: '180px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">₹{product.price.toLocaleString()}</p>

                  {quantity === 0 ? (
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="d-flex justify-content-center align-items-center mt-auto gap-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="btn btn-success"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
