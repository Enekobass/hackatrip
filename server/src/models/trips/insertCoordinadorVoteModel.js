import getPool from '../../db/getPool.js';

import { cantVoteCoordinador } from '../../services/errorService.js';

const insertCoordinadorVoteModel = async (value, viajeId, userId) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `SELECT userId FROM viajesreservados WHERE userId = ? AND viajeId = ?`,
        [userId, viajeId],
    );

    if (!user[0]) {
        cantVoteCoordinador();
    }

    const [coordinadorId] = await pool.query(
        `SELECT userId FROM coordinadorviajes WHERE viajeId = ?`,
        [viajeId],
    );

    await pool.query(
        `INSERT INTO coordinadorvotes (value, userId, viajeId) VALUES (?, ?, ?)`,
        [value, coordinadorId[0].userId, viajeId],
    );
};

export default insertCoordinadorVoteModel;
