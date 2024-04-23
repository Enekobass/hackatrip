import getPool from '../../db/getPool.js';

const insertPhotoModels = async (name, viajeId) => {
    const pool = await getPool();

    const [photo] = await pool.query(
        `INSERT INTO viajesPhotos (name, viajeId) VALUES (?, ?)`,
        [name, viajeId],
    );

    return photo.insertId;

};

export default insertPhotoModels;

