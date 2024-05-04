import getPool from '../../db/getPool.js';

import { cantBeCoordinador } from '../../services/errorService.js';

const insertCoordinadorModel = async (coordinadorId, viajeId) => {
    const pool = await getPool();

    const [coordinador] = await pool.query(
        `SELECT userId FROM coordinadorviajes WHERE viajeId = ?`,
        [viajeId],
    );

    if (coordinador[0]) {
        cantBeCoordinador();
    }

    await pool.query(
        `INSERT INTO coordinadorviajes (userId, viajeId) VALUES (?, ?)`,
        [coordinadorId, viajeId],
    );
};

export default insertCoordinadorModel;
