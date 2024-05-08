import getPool from '../../db/getPool.js';

const selectRatedCoordinadorModel = async () => {
    const pool = await getPool();

    const [coordinadores] = await pool.query(
        `
        SELECT 
            username, avatar, AVG(cv.value)
        FROM users u
        LEFT JOIN coordinadorviajes c ON c.userId = u.id
        LEFT JOIN coordinadorvotes cv ON c.viajeId = cv.viajeId
        GROUP BY u.id
        `
    );

    return coordinadores;
};

export default selectRatedCoordinadorModel;
