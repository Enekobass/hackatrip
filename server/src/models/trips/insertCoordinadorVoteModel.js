import getPool from '../../db/getPool.js';

const insertCoordinadorVoteModel = async (value, viajeId) => {
    const pool = await getPool();

    const [coordinadorId] = await pool.query(
        `SELECT userId FROM coordinadorviajes WHERE viajeId = ?`,
        [viajeId],
    );
    
    await pool.query(
        `INSERT INTO coordinadorvotes (value, userId, viajeId) VALUES (?, ?, ?)`,
        [value, coordinadorId, viajeId],
    );
};

export default insertCoordinadorVoteModel;