import getPool from '../../db/getPool.js';

const insertTripModel = async (
    id,
    titulo,
    descripcion,
    destino,
    fechaDeInicio,
    fechaDeFin,
    plazasMinimas,
    plazasMaximas,
    itinerario,
    precio,
    grupoDeEdad,
    activo,
    photoId,
) => {
    const pool = await getPool();

    await pool.query(
        `INSERT INTO viajes (id, titulo, descripcion, destino, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, itinerario, precio, grupoDeEdad, activo, confirmado, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            id,
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            itinerario,
            precio,
            grupoDeEdad,
            activo,
            0,
            photoId,
        ],
    );
};

export default insertTripModel;
