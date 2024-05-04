import getPool from '../../db/getPool.js';

import { cantJoinTrip } from '../../services/errorService.js';

const reservarTripModel = async (userId, viajeId) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `SELECT userId FROM viajesreservados WHERE userId = ? AND viajeId = ?`,
        [userId, viajeId],
    );

    if (user[0]) {
        cantJoinTrip();
    }

    await pool.query(
        `INSERT into viajesreservados (userId, viajeId) VALUES (?, ?)`,
        [userId, viajeId],
    );
};

export default reservarTripModel;
