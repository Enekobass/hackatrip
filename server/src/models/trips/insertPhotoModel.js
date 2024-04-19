import getPool from '../../db/getPool.js';

const insertPhotoModel = async (photoName, viajeId) => {
    const pool = await getPool();

    const [photo] = await pool.query(
        `INSERT INTO viajesphotos (name, viajeId) VALUES (?, ?)`,
        [photoName, viajeId],
    );

    return photo.insertId;
};

export default insertPhotoModel;
