import getPool from '../../db/getPool.js';

const selectCoordinador = async (viajeId) => {
    const pool = await getPool();

    await pool.query(
        `DELETE coordinadorvoluntario FROM viajes WHERE id = ?`,
        [viajeId]
    );
};

export default selectCoordinador;

