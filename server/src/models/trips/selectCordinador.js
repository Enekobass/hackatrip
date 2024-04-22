import getPool from '../../db/getPool.js';

const selectCoordinador = async (viajeId) => {
    const pool = await getPool();

    const [usuario] = await pool.query(
        `SELECT coordinadorvoluntario FROM viajes WHERE id = ?`,
        [viajeId]
    );

    return usuario[0];
};

export default selectCoordinador;


