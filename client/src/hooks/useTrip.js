import { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { selectTripByIdService } from '../services/tripService';

const useTrip = (viajeId) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const trip = await selectTripByIdService(viajeId);

        setTrip(trip);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchTrip();
  }, [viajeId]);

  const addTripVote = (votesAvg) => {
    setTrip({
      ...trip,
      votes: votesAvg,
    });
  };

  return { trip, addTripVote };
};

export default useTrip;
