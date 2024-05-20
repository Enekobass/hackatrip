import getPool from '../../db/getPool.js';

const selectAvgValueCoordinadorModel = async () => {
    const pool = await getPool();

    const [avgValue] = await pool.query(
        `
        SELECT 
            AVG(cv.value) as media
        FROM users u
        LEFT JOIN coordinadorviajes c ON c.userId = u.id
        LEFT JOIN coordinadorvotes cv ON c.viajeId = cv.viajeId
        WHERE c.userId = u.id
        GROUP BY u.id
        `,
    );

    return avgValue[0];
};

export default selectAvgValueCoordinadorModel;
