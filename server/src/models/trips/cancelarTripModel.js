import getPool from '../../db/getPool.js';

const cancelarTripModel = async (username) => {
    const pool = await getPool();

    await pool.query(
        `DELETE FROM viajesreservados WHERE userId = ?`,
        [username],
    );
};

export default cancelarTripModel;