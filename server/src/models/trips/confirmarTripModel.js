import getPool from '../../db/getPool.js';

import sendMailUtil from '../../utils/sendMailUtil.js';

const confirmarTripModel = async (viajeId) => {
    const pool = await getPool();

    await pool.query(`UPDATE viajes SET confirmado = ? WHERE id = ?`, [
        1,
        viajeId,
    ]);

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

    const emailSubject = 'Viaje confirmado';

    const emailBody = `
            ¡Hemos confirmado el viaje al que estás apuntado, en unos días os enviaremos los detalles necesarios para la salida!.

            Saludos, Hack a Trip.
        `;

    for (let i = 0; i < inscritos.length; i++) {
        await sendMailUtil(inscritos[i].email, emailSubject, emailBody);
    }
};

export default confirmarTripModel;
