import getPool from '../../db/getPool.js';

const insertCoordinadorConfirmadoModel = async (userId) => {
    const pool = await getPool();

    await pool.query(
        `UPDATE coordinadorviajes SET confirmado = ? WHERE userId = ?`,
        [1, userId],
    );
};

export default insertCoordinadorConfirmadoModel;
