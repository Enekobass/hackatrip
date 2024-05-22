import PropTypes from 'prop-types';
import './EntryTripInfo.css';

const { VITE_API_URL } = import.meta.env;

import { bookTripService } from '../../services/tripService';

import toast from 'react-hot-toast';

const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

const TripInfo = ({ destino, titulo, descripcion, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, photo, activo, confirmado, id, authToken }) => {

    const handleClick = async (e) => {
        try {
            e.preventDefault();

            const book = await bookTripService(id, authToken);

            toast.success(book);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <form>
            <div className="entry-header">
                {/* Contenedor para el título */}
                <div className="title-container">
                    <h1 className="title">{titulo}</h1>
                </div>
                {/* Imagen debajo del título */}
                <img
                    src={`${VITE_API_URL}/${photo}`}
                    alt={`Foto de ${destino}`}
                    className="entry-image"
                />
                <div className="place-overlay">
                    <strong></strong> {destino}
                </div>
                <div className="dates-overlay">
                    <span className="fecha-in">{formatDate(fechaDeInicio)}</span>
                    <span>-</span>
                    <span className="fecha-fin">{formatDate(fechaDeFin)}</span>
                </div>
            </div>
            <ul className='entry-details'>
                <li className="description">
                    <strong></strong> {descripcion}
                </li>
                <li className="itinerary">
                    <h2>Itinerario</h2>
                    <div className="route">
                        <strong></strong> {ruta}
                    </div>
                </li>
                <li className="hidden">
                    <strong>Plazas mínimas:</strong> {plazasMinimas}
                </li>
                <li className="hidden">
                    <strong>Plazas máximas:</strong> {plazasMaximas}
                </li>
                <li className='price-overlay'>
                    <strong>Precio:</strong> {precio} €
                </li>
                <li className='hidden'>
                    <strong></strong> {activo}
                </li>
                <li className='hidden'>
                    <strong></strong> {confirmado}
                </li>
            </ul>

            {/* Botón para apuntarse */}
            <div className="button-container">
                <button onClick={handleClick} className="signup-button">Apuntarme</button>
            </div>

        </form>
    );
};

TripInfo.propTypes = {
    destino: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    fechaDeInicio: PropTypes.string.isRequired,
    fechaDeFin: PropTypes.string.isRequired,
    plazasMinimas: PropTypes.number.isRequired,
    plazasMaximas: PropTypes.number.isRequired,
    ruta: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    activo: PropTypes.number.isRequired,
    confirmado: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    authToken: PropTypes.string,
};

export default TripInfo;
