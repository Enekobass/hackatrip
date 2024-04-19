import getPool from '../../db/getPool.js';

const insertTripModel = async (
    titulo,
    descripcion,
    destino,
    fechaDeInicio,
    fechaDeFin,
    plazasMinimas,
    plazasMaximas,
    ruta,
    precio,
) => {
    const pool = await getPool();

    const [trip] = await pool.query(
        `INSERT INTO viajes (titulo, descripcion, destino, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            titulo,
            descripcion,
            destino,
            fechaDeInicio,
            fechaDeFin,
            plazasMinimas,
            plazasMaximas,
            ruta,
            precio,
        ],
    );

    return trip.insertId;
};

export default insertTripModel;
