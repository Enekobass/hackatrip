import PropTypes from 'prop-types';
import './EntryTripInfo.css';

const { VITE_API_URL } = import.meta.env;

const TripInfo = ({ destino, titulo, descripcion, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, photo, activo, confirmado }) => {

    return (
        <div>
            <div className="entry-header">
                <img
                    src={`${VITE_API_URL}/${photo}`}
                    alt={`Foto de ${destino}`}
                />
                <div className="place-overlay">
                    <strong>Lugar:</strong> {destino}
                </div>
                <div className="dates-overlay">
                    <span className="fecha-in">{fechaDeInicio}</span>
                    <span>-</span>
                    <span className="fecha-fin">{fechaDeFin}</span>
                </div>
            </div>
            <ul className='entry-details'>
                <li className="title">
                    <strong>Título:</strong> {titulo}
                </li>
                <li className="description">
                    <strong>Descripción:</strong> {descripcion}
                </li>
                <li className="itinerary">
                    <h2>Itinerario</h2>
                    <div className="route">
                        <strong>Ruta:</strong> {ruta}
                    </div>
                </li>
                <li className="hidden">
                    <strong>Plazas mínimas:</strong> {plazasMinimas}
                </li>
                <li className="hidden">
                    <strong>Plazas máximas:</strong> {plazasMaximas}
                </li>
                <li>
                    <strong>Precio:</strong> {precio}
                </li>
                <li>
                    <strong>Activo:</strong> {activo}
                </li>
                <li>
                    <strong>Confirmado:</strong> {confirmado}
                </li>
            </ul>
        </div>
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
};

export default TripInfo;
