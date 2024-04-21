import getPool from '../../db/getPool.js';

const insertPhotoModel = async (photoName) => {
    const pool = await getPool();

    const [photo] = await pool.query(`SELECT imagen FROM viajes`);

    return photo[0];
};

export default insertPhotoModel;
