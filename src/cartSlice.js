// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      
      
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);
      
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= (itemToRemove.price * itemToRemove.quantity);
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
    },
    
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    

    
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
  
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,

  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
