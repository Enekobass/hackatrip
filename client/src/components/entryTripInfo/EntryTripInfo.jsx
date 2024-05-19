import PropType from 'prop-types';

const { VITE_API_URL } = import.meta.env;

const TripInfo = ({ destino, titulo, descripcion, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, photo, activo, confirmado }) => {
    return (
        <ul className='trip-details'>
            <li>
                <img
                    src={`${VITE_API_URL}/${photo}`}
                    alt={`Foto de ${destino}`}
                    />
            </li>
            <li>
                <strong>Lugar:</strong> {destino}
            </li>
            <li>
                <strong>Título:</strong> {titulo}
            </li>
            <li>
                <strong>Descripción:</strong> {descripcion}
            </li>
            <li>
                <strong>Fecha de inicio:</strong> {fechaDeInicio}
            </li>
            <li>
                <strong>Fecha de fin:</strong>{fechaDeFin}
            </li>
            <li>
                <strong>Plazas mínimas:</strong>{plazasMinimas}
            </li>
            <li>
                <strong>Plazas máximas:</strong> {plazasMaximas}
            </li>
            <li>
                <strong>Ruta:</strong> {ruta}
            </li>
            <li>
                <strong>Precio</strong> {precio}
            </li>
            <li>
                <strong>Activo:</strong> {activo}
            </li>
            <li>
                <strong>Confirmado:</strong> {confirmado}
            </li>
        </ul>
    );
};

TripInfo.propTypes = {
    destino: PropType.string.isRequired,
    descripcion: PropType.string.isRequired,
    titulo: PropType.string.isRequired,
    fechaDeInicio: PropType.string.isRequired,
    fechaDeFin: PropType.string.isRequired,
    plazasMinimas: PropType.number.isRequired,
    plazasMaximas: PropType.number.isRequired,
    ruta: PropType.string.isRequired,
    precio: PropType.number.isRequired,
    photo: PropType.string.isRequired,
    activo: PropType.number.isRequired,
    confirmado: PropType.number.isRequired,
};

export default TripInfo;
