import { createSlice } from '@reduxjs/toolkit';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const token = localStorage.getItem('authToken') || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userInfo,
    token: token,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
