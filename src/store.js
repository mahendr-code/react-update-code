import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/authSlice';
import cartReducer from './cartSlice';
import { authApi } from './components/authApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer, // ✅ Moved inside reducer block
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
