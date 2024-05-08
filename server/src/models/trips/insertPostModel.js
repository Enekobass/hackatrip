import getPool from '../../db/getPool.js';

import { cantAddPhoto } from '../../services/errorService.js';

const insertPostModel = async (
    photoName,
    viajeId,
    userId,
    value,
    title,
    description,
) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `            
        SELECT
            vr.userId
        FROM viajesreservados vr
        WHERE vr.userId = ? AND vr.viajeId = ?`,
        [userId, viajeId],
    );

    if (!user[0]) {
        cantAddPhoto();
    }

    const [photo] = await pool.query(
        `INSERT INTO viajesposts (userId, viajeId, value, title, description, name) VALUES (?, ?, ?, ?, ?, ?)`,
        [userId, viajeId, value, title, description, photoName],
    );

    return photo.insertId;
};

export default insertPostModel;