import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PaymentPage from './PaymentPage.jsx';
import Navbar from './Navbar';
import ProductList from './Products';
import Cart from './Cart';
import AuthForm from './components/AuthForm';
import PrivateRoute from './PrivateRoute.jsx';
import Profile from './Profile';
import Orders from './Orders';
import CategoryNavbar from './CategoryNavbar';
import ScrollToTop from './scroll.js';


import './index.css';

const App = () => {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
             <CategoryNavbar />
                   <ScrollToTop />
     <Routes>
  {/* Public Routes */}
  <Route path="/login" element={<AuthForm />} />
  <Route path="/register" element={<AuthForm />} />

  {/* Protected Routes */}
  <Route
    path="/"
    element={
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    }
  />
  <Route
    path="/products"
    element={
      <PrivateRoute>
        <ProductList />
      </PrivateRoute>
    }
  />
  <Route
    path="/cart"
    element={
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    }
  />
  <Route
    path="/payment"
    element={
      <PrivateRoute>
        <PaymentPage />
      </PrivateRoute>
    }
  />
   <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
</Routes>


        </div>
      </BrowserRouter>
    </Provider>
      
  );
};

export default App;
