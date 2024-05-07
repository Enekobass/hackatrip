import getPool from '../../db/getPool.js';

import { cantJoinTrip } from '../../services/errorService.js';

import confirmarTripModel from './confirmarTripModel.js';

const reservarTripModel = async (userId, viajeId) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `SELECT userId FROM viajesreservados WHERE userId = ? AND viajeId = ?`,
        [userId, viajeId],
    );

    const [plazasMin] = await pool.query(
        `SELECT plazasMinimas FROM viajes WHERE id = ?`,
        [viajeId],
    );

    if (user[0]) {
        cantJoinTrip();
    }

    await pool.query(
        `INSERT into viajesreservados (userId, viajeId) VALUES (?, ?)`,
        [userId, viajeId],
    );

    const [inscritos] = await pool.query(
        `
        SELECT 
            email, username, avatar
        FROM users u
        LEFT JOIN viajesreservados r ON r.userId = u.id
        WHERE r.viajeId = ?
        `,
        [viajeId],
    );

    if (plazasMin[0].plazasMinimas === inscritos.length) {
        confirmarTripModel(viajeId);
    }
};

export default reservarTripModel;
