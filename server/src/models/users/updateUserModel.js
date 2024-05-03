const updateUserModel = async (username, email, password, userId) => {
    const pool = await getPool();

    if (username) {
        const [users] = await pool.query(
            `SELECT id FROM users WHERE username = ?`,
            [username],
        );

        if (users.length > 0) {
            userAlreadyRegisteredError();
        }

        await pool.query(`UPDATE users SET username = ? WHERE id = ?`, [
            username,
            userId,
        ]);
    }

    if (email) {
        const [users] = await pool.query(
            `SELECT id FROM users WHERE email = ?`,
            [email],
        );

        if (users.length > 0) {
            emailAlreadyRegisteredError();
        }

        await pool.query(`UPDATE users SET email = ? WHERE id = ?`, [
            email,
            userId,
        ]);
    }

    if (password) {
        await pool.query(`UPDATE users SET password = ? WHERE id = ?`, [
            password,
            userId,
        ]);
    }
};

export default updateUserModel;