import getPool from '../../db/getPool.js';

const selectCoordinador = async (viajeId) => {
    const pool = await getPool();

    await pool.query(
        `UPDATE viajes SET coordinadorvoluntario = NULL WHERE id = ?`,
        [viajeId]
    );
};

export default selectCoordinador;

