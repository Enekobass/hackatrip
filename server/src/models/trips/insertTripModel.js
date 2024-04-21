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
    ruta,
    precio,
    activo,
    confirmado,
    photoId,
) => {
    const pool = await getPool();

    await pool.query(
        `INSERT INTO viajes (id, titulo, descripcion, destino, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, activo, confirmado, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            id,
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            ruta,
            precio,
            activo,
            confirmado,
            photoId,
        ],
    );
};

export default insertTripModel;
