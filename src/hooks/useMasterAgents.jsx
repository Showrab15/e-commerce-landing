

import  { useState, useEffect } from 'react';

const useMasterAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const masterAgentsApi= import.meta.env.VITE_masterAgentApi

  // Fetch the agents from the backend
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(masterAgentsApi);
        const data = await response.json();
        setAgents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []); // Fetches data once when the component is mounted

  return [agents, setAgents, loading];
};

export default useMasterAgents;

