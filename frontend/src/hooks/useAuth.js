import { useState, useEffect } from 'react';

export function useAuth() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  return { token };
}