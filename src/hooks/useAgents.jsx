


import  { useState, useEffect } from 'react';

const useAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
 const agentsApi= import.meta.env.VITE_agentsapi
 // console.log(agentsApi)
  // Fetch the agents from the backend
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(agentsApi);
        const data = await response.json();
        setAgents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, [agentsApi]); // Fetches data once when the component is mounted

  return [agents, setAgents, loading];
};

export default useAgents;

