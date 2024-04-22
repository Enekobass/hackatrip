import getPool from '../../db/getPool.js';

const insertCoordinadorConfirmadoModel = async (coordinador, viajeId) => {
    const pool = await getPool();

    await pool.query(
        `UPDATE viajes SET coordinadorconfirmado = ? WHERE id = ?`,
        [coordinador, viajeId],
    );
};

export default insertCoordinadorConfirmadoModel;
