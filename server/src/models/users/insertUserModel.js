import bcrypt from 'bcrypt';

import getPool from '../../db/getPool.js';

import {
    userAlreadyRegisteredError,
    emailAlreadyRegisteredError,
} from '../../services/errorService.js';

const insertUserModel = async (id, username, email, password) => {
    const pool = await getPool();

    let [users] = await pool.query(`SELECT id FROM users WHERE username = ?`, [
        username,
    ]);

    if (users.length > 0) {
        userAlreadyRegisteredError();
    }

    [users] = await pool.query(`SELECT id FROM users WHERE email = ?`, [email]);

    if (users.length > 0) {
        emailAlreadyRegisteredError();
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await pool.query(
        `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`,
        [id, username, email, hashedPass],
    );
};

export default insertUserModel;
