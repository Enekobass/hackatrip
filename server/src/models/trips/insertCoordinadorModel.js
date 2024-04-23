import getPool from '../../db/getPool.js';

const insertCoordinadorModel = async (username, viajeId) => {
    const pool = await getPool();


    await pool.query(
        `UPDATE viajes SET coordinadorvoluntario = ? WHERE id = ?`,
        [username, viajeId],
    );
};

export default insertCoordinadorModel;
