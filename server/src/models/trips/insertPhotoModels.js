import getPool from '../../db/getPool.js';

const insertPhotoModels = async (name, viajeId, userId) => {
    const pool = await getPool();

    const [photo] = await pool.query(
        `INSERT INTO viajesPhotos (name, userId, viajeId) VALUES (?, ?, ?)`,
        [name, userId, viajeId],
    );

    return photo.insertId;
};

export default insertPhotoModels;
