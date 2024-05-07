import getPool from '../../db/getPool.js';

import { cantAddPhoto } from '../../services/errorService.js';

const insertPhotoModels = async (name, viajeId, userId, value, title, description) => {
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
        `INSERT INTO viajesPhotos (name, userId, viajeId, value, title, description) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, userId, viajeId, value, title, description],
    );


    return photo.insertId;
};

export default insertPhotoModels;
