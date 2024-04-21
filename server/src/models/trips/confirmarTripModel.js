import getPool from '../../db/getPool.js';

const confirmarTripModel = async (viajeId) => {
    const pool = await getPool();

    await pool.query(`UPDATE viajes SET confirmado = ? WHERE id = ?`, [
        1,
        viajeId,
    ]);
};

export default confirmarTripModel;
