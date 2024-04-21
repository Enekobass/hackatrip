import getPool from '../../db/getPool.js';

const reActivarTripModel = async (viajeId) => {
    const pool = await getPool();

    await pool.query(`UPDATE viajes SET activo = ? WHERE id = ?`, [1, viajeId]);
};

export default reActivarTripModel;
