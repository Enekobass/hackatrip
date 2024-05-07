import getPool from '../../db/getPool.js';

import { cantAddPhoto } from '../../services/errorService.js';

const insertPhotoModels = async (viajeId, userId, value, title, description) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `            
        SELECT
            vr.userId
        FROM viajesreservados vr
        WHERE vr.userId = ? AND vr.viajeId = ?`,
        [userId, viajeId],


    );

    console.log(userId);

    if (!user[0]) {
        cantAddPhoto();
    }

    const [photo] = await pool.query(
        `INSERT INTO viajesPhotos (userId, viajeId, value, title, description) VALUES (?, ?, ?, ?, ?)`,
        [userId, viajeId, value, title, description],
    );


    return photo.insertId;
};

export default insertPhotoModels;
