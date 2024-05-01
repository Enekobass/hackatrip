import getPool from '../../db/getPool.js';

import sendMailUtil from '../../utils/sendMailUtil.js';

const insertCoordinadorConfirmadoModel = async (userId, viajeId) => {
    const pool = await getPool();

    await pool.query(
        `UPDATE coordinadorviajes SET confirmado = ? WHERE userId = ? AND viajeId = ?`,
        [1, userId, viajeId],
    );

    const [inscritos] = await pool.query(
        `
            SELECT
                u.id,
                u.email
            FROM users u
            LEFT JOIN viajesreservados r ON r.userId = u.id
            WHERE u.id = r.userId AND r.viajeId = ?
        `,
        [viajeId],
    );

    const emailSubject = 'Coordinador confirmado';

    const emailBody = `
            ¡Hemos confirmado un coordinador para el viaje en el que estás apuntado, pronto os enviaremos más detalles!
        `;

    for (let i = 0; i < inscritos.length; i++) {
        await sendMailUtil(inscritos[i].email, emailSubject, emailBody);
    }
};

export default insertCoordinadorConfirmadoModel;
