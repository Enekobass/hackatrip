import getPool from '../../db/getPool.js';

import sendMailUtil from '../../utils/sendMailUtil.js';

const desactivarTripModel = async (viajeId) => {
    const pool = await getPool();

    await pool.query(`UPDATE viajes SET activo = ? WHERE id = ?`, [0, viajeId]);

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

    const emailSubject = 'Viaje suspendido';

    const emailBody = `
            Hemos visto que no hay suficientes participantes para el viaje al que estás apuntado, por tanto hemos decidido suspenderlo por ahora, si conseguimos llenar plazas os notificaremos de nuevo.

            Perdonamos las molestias, Hack a Trip.
        `;

    for (let i = 0; i < inscritos.length; i++) {
        await sendMailUtil(inscritos[i].email, emailSubject, emailBody);
    }
};

export default desactivarTripModel;
