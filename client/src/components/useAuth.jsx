import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace the below line with your actual authentication logic
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};
