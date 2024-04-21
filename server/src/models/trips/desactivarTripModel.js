import getPool from '../../db/getPool.js';

const desactivarTripModel = async (viajeId) => {
    const pool = await getPool();

    await pool.query(`UPDATE viajes SET activo = ? WHERE id = ?`, [0, viajeId]);
};

export default desactivarTripModel;
