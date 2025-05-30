import React from 'react';
import { useGetMeQuery } from './components/authApi'; // ✅ Adjust path

const Profile = () => {
  const token = localStorage.getItem('authToken');

  // ✅ If token is missing, show message instead of disappearing page
  if (!token) {
    return (
      <div className="container mt-4 text-danger">
        You are not logged in. Please login to see your profile.
      </div>
    );
  }

  const { data, error, isLoading } = useGetMeQuery();

  if (isLoading) return <div className="container mt-4">Loading profile...</div>;

  if (error) return (
    <div className="container mt-4 text-danger">
      Failed to load profile. Please log in again.
    </div>
  );

  const user = data?.data || data; // ✅ adjust based on API response shape

  return (
    <div className="container shadow-lg rounded" style={{ marginTop: '100px', paddingTop: '20px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
      <p><strong>Gender:</strong> {user?.gender}</p>
    </div>
  );
};

export default Profile;
