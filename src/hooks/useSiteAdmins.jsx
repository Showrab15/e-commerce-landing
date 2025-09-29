


import  { useState, useEffect } from 'react';

const useSiteAdmins = () => {
  const [siteAdmins, setSiteAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteadminsApi= import.meta.env.VITE_siteadminsapi

  // Fetch the siteAdmins from the backend
  useEffect(() => {
    const fetchSiteAdmins = async () => {
      try {
        const response = await fetch(siteadminsApi);
        const data = await response.json();
        setSiteAdmins(data);
        setLoading(false);
        // console.log(siteAdmins)
      } catch (error) {
        console.error('Error fetching siteAdmins:', error);
      }
    };

    fetchSiteAdmins();
  }, [siteadminsApi]); // Fetches data once when the component is mounted

  return [siteAdmins, setSiteAdmins, loading];
};

export default useSiteAdmins;

