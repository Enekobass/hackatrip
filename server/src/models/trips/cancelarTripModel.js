import getPool from '../../db/getPool.js';

const cancelarTripModel = async (username, viajeId) => {
    const pool = await getPool();

    await pool.query(
        `DELETE FROM viajesreservados WHERE userId = ? AND viajeId = ?`,
        [username, viajeId],
    );
};

export default cancelarTripModel;
