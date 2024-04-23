import getPool from '../../db/getPool.js';

const insertCoordinadorModel = async (coordinadorId, viajeId) => {
    const pool = await getPool();

    await pool.query(
        `INSERT INTO coordinadorviajes (userId, viajeId) VALUES (?, ?)`,
        [coordinadorId, viajeId],
    );
};

export default insertCoordinadorModel;
