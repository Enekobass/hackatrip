import getPool from '../../db/getPool.js';

const filterTripModel = async (fecha, destino) => {
    const pool = await getPool();

    const [viajes] = await pool.query(
        `
        SELECT
            v.titulo,
            v.destino,
            v.imagen,
            v.fechaDeInicio,
            v.precio,
            v.activo,
            v.confirmado,
            COUNT(r.viajeId) AS numeroReservas
        from viajes v
        INNER JOIN viajesreservados r ON r.viajeId = v.Id
        `
    )
    return viajes;
};

export default filterTripModel;

