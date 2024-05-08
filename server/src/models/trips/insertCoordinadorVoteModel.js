import getPool from '../../db/getPool.js';

import {
    cantVoteCoordinador,
    cantVoteCoordinadorAgain,
} from '../../services/errorService.js';

const insertCoordinadorVoteModel = async (value, viajeId, userId) => {
    const pool = await getPool();

    let [user] = await pool.query(
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

    [user] = await pool.query(
        `SELECT userId FROM coordinadorviajes WHERE viajeId = ?`,
        [viajeId],
    );

    if (user) {
        cantVoteCoordinadorAgain();
    }

    await pool.query(
        `INSERT INTO coordinadorvotes (value, coordinadorId, viajeId, userId) VALUES (?, ?, ?, ?)`,
        [value, coordinadorId[0].userId, viajeId, userId],
    );
};

export default insertCoordinadorVoteModel;
