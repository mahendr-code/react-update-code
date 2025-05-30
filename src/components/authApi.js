// src/redux/services/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://tutorials.codebetter.in:7084/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Login mutation
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),

    // Register mutation
    registerUser: builder.mutation({
      query: (formData) => ({
        url: 'auth/save',
        method: 'POST',
        body: formData,
      }),
    }),

    // Get user profile
    getMe: builder.query({
      query: () => 'api/user/me',
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetMeQuery,
} = authApi;
