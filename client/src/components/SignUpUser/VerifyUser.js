import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyUser = ({ children }) => {
  const { id } = useParams();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Handle case where token is missing
          return;
        }
        // Send token to backend to verify user's privileges
        const response = await axios.post('http://localhost:5050/verifyToken', { token });
        if (response.data === 'admin') {
          
          return;
        } else {
          // User is not an admin, handle unauthorized access
          // For example, redirect to login page or display an error message
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      }
    };

    verifyToken();
  }, [id]);

  return <>{children}</>;
};

export default VerifyUser;
