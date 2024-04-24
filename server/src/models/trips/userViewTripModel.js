import getPool from '../../db/getPool.js';

const userViewTripModel = async (tripId) => {
    const pool = await getPool();

    // Consulta SQL para obtener la información del viaje y los usuarios inscritos
    const query = `
        SELECT v.id as viaje_id, v.titulo, v.descripcion, v.destino, v.fechaDeInicio, v.fechaDeFin, v.plazasMinimas, 
               v.plazasMaximas, v.ruta as imagen, v.precio, v.activo, v.confirmado, u.avatar, u.email, u.username
        FROM viajes v
        INNER JOIN users u ON v.id = u.viaje_id
        WHERE v.id = ?;
    `;

    // Ejecutar la consulta utilizando el pool de conexiones
    const [rows, fields] = await pool.query(query, [tripId]);

    // Devolver los resultados de la consulta
    return rows;
};

export default userViewTripModel;
