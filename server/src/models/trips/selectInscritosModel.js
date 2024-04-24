import getPool from '../../db/getPool.js';

const selectInscritosModel = async (viajeId) => {
    const pool = await getPool();

    console.log(viajeId);
    const [inscritos] = await pool.query(
        `
        SELECT 
            email, username, avatar
        FROM users u
        LEFT JOIN viajesreservados r ON r.userId = u.id
        LEFT JOIN viajesreservados vr ON r.viajeId = vr.viajeId
        WHERE vr.viajeId = ?
        `,
        [viajeId],
    );

    return inscritos;
};

export default selectInscritosModel;