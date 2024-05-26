import PropType from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { Link } from 'react-router-dom';

const { VITE_API_URL } = import.meta.env;

const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

const FilterVideos = ({trips, loading}) => {
    return (
        <Grid container flexDirection="column" marginLeft={40}>
            {(loading ? Array.from(new Array(5)) : trips).map((trip, index) => (
                <Box key={index} sx={{ width: 320, marginRight: 1, my: 5 }}>
                {trip ? (
                    <>
                        <p>{formatDate(trip.fechaDeInicio)}</p>
                        <p>{trip.destino}</p>
                        <p>Desde {formatDate(trip.fechaDeInicio)} a {formatDate(trip.fechaDeFin)}</p>
                    </>
                ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                )}
                </Box>
            ))}
        </Grid>
    );
};

FilterVideos.propTypes = {
    trips: PropType.array.isRequired,
    loading: PropType.bool.isRequired,
};


export default FilterVideos;
