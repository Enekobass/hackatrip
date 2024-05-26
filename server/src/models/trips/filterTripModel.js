import getPool from '../../db/getPool.js';

const filterTripModel = async (fecha = '', destino = '', userId = '') => {
    const pool = await getPool();

    const [viajes] = await pool.query(
        ` 
        SELECT
            v.id,
            v.titulo,
            v.destino,
            v.imagen,
            v.fechaDeInicio,
            v.fechaDeFin,
            v.precio,
            v.activo,
            v.confirmado,
            v.createdAt,
            COUNT(r.viajeId) AS numeroReservas,
            BIT_OR(vr.userId = ?) AS reservedByMe
        from viajes v
        LEFT JOIN viajesreservados r ON r.viajeId = v.id
        LEFT JOIN viajesreservados vr ON r.viajeId = vr.viajeId
        WHERE destino LIKE ? AND fechaDeInicio LIKE ?
        GROUP BY v.id
        ORDER BY v.createdAt DESC
       `,
        [userId, `%${destino}%`, `%${fecha}%`],
    );

    return viajes;
};

export default filterTripModel;
