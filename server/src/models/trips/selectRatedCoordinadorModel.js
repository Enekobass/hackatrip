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
        WHERE cv.coordinadorId = u.id
        GROUP BY u.id
        `,
    );

    console.log(coordinadores);

    return coordinadores;
};

export default selectRatedCoordinadorModel;
