import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

import useTrips from "../../hooks/useTrips.js"

const { VITE_API_URL } = import.meta.env;

function TripListItem() {

  const { trips, loading } = useTrips();

  return (
    <Grid container>
      {(loading ? Array.from(new Array(5)) : trips).map((trip, index) => (
        <Box key={index} sx={{ width: 320, marginRight: 1, my: 5 }}>
          {trip ? (
              <Link to={`/trippage/${trip.id}`} className='trip-item'>
                <img
                  style={{ width: 320, height: 180, border: '2px solid white', borderRadius: '10px' }}
                  alt={trip.destino}
                  src={`${VITE_API_URL}/${trip.imagen}`}
                />
              </Link>
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {trip ? (
            <Link to={`/trippages/${trip.id}`} className='trip-item'>
              <Box sx={{ pr: 2, marginLeft: 7}}>
                <Typography gutterBottom variant="body1" color="ButtonText">
                  {trip.destino}
                </Typography>
                <Typography display="block" variant="subtitle1" color="GrayText">
                  {trip.precio}€
                </Typography>
              </Box>
            </Link>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function HackATrip() {

  return (
    <Box>
      <TripListItem loading/>
    </Box>
  );
}
