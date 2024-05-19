import PropType from 'prop-types';

import { Link } from 'react-router-dom';

const { VITE_API_URL } = import.meta.env;

import './TripListItem.css';

const TripListItem = ({ trip }) => {
    return (
        <Link to={`/trippage/${trip.id}`} className='ideas'>
            <li>
                <div  className='botonFoto'>
                    <img
                        src={`${VITE_API_URL}/${trip.imagen}`}
                        alt={trip.destino}
                    />
                </div>
                <div className='trip-info'>
                    <div>
                        <h3>Desde {trip.precio}€</h3>

                        <p>
                            {trip.destino}
                        </p>
                    </div>
                </div>
            </li>
        </Link>
    );
};

TripListItem.propTypes = {
    trip: PropType.object.isRequired,
};

export default TripListItem;
