import getPool from '../../db/getPool.js';

const reservarTripModel = async (username, viajeId) => {
    const pool = await getPool();

    await pool.query(
        `INSERT into viajesreservados (userId, viajesId) VALUES (?, ?)`,
        [username, viajeId],
    );
};

export default reservarTripModel;