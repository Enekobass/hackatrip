import getPool from '../../db/getPool.js';

const insertCoordinadorModel = async (username, viajeId) => {
    const pool = await getPool();

    console.log(username);

    console.log(viajeId);

    await pool.query(
        `UPDATE viajes SET coordinadorvoluntario = ? WHERE id = ?`,
        [username, viajeId],
    );
};

export default insertCoordinadorModel;
