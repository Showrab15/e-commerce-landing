
import  { useState, useEffect } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const usersApi= import.meta.env.VITE_usersapi

  // Fetch the users from the backend
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(usersApi);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchAgents();
  }, [usersApi]); // Fetches data once when the component is mounted

  return [users, setUsers, loading];
};

export default useUsers;