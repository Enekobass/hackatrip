import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { selectAllTripsService } from '../services/tripService';

const useTrips = () => {
  const [trips, setTrips] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);

        const trips = await selectAllTripsService(searchParams);

        setTrips(trips);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [searchParams]);

  return {
    trips,
    setSearchParams,
    loading,
  };
};

export default useTrips;
