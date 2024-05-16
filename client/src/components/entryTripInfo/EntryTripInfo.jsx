import PropType from 'prop-types';

const EntryTripInfo = ({ destino, titulo, descripcion, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, photo, activo, confirmado }) => {
    return (
        <ul className='entry-details'>
            <li>
                <strong>Foto:</strong> {photo}
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

EntryTripInfo.propTypes = {
    destino: PropType.string.isRequired,
    descripcion: PropType.string.isRequired,
    titulo: PropType.string.isRequired,
    fechaDeInicio: PropType.string.isRequired,
    fechaDeFin: PropType.string.isRequired,
    plazasMinimas: PropType.string.isRequired,
    plazasMaximas: PropType.string.isRequired,
    ruta: PropType.string.isRequired,
    precio: PropType.string.isRequired,
    photo: PropType.string.isRequired,
    activo: PropType.string.isRequired,
    confirmado: PropType.string.isRequired,
};

export default EntryTripInfo;
