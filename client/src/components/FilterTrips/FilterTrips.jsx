import PropType from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { Link } from 'react-router-dom';

const { VITE_API_URL } = import.meta.env;

const FilterVideos = ({trips, loading}) => {

    return (
        <Grid container flexDirection="column" marginLeft={40}>
            {(loading ? Array.from(new Array(5)) : trips).map((trip, index) => (
                <Box key={index} sx={{ width: 320, marginRight: 1, my: 5 }}>
                {trip ? (
                    <Link to={`/trippage/${trip.id}`} className='trip-item'>
                        <img
                        style={{ width: 500, height: 290, border: '2px solid white', borderRadius: '10px' }}
                        alt={trip.destino}
                        src={`${VITE_API_URL}/${trip.imagen}`}
                        />
                    </Link>
                ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                )}

                {trip ? (
                    <Link to={`/trippage/${trip.id}`} className='trip-item'>
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
};

FilterVideos.propTypes = {
    trips: PropType.array.isRequired,
    loading: PropType.bool.isRequired,
};


export default FilterVideos;
