import getPool from './getPool.js';
import {
    ADMIN_EMAIL,
    ADMIN_USERNAME,
    ADMIN_PASSWORD,
    ADMIN_ROLE,
} from '../../env.js';
import bcrypt from 'bcrypt';

const createTables = async () => {
    try {
        const hashedPass = await bcrypt.hash(ADMIN_PASSWORD, 10);
        const id = crypto.randomUUID();

        const pool = await getPool();

        console.log('Dropping tables...');

        await pool.query(
            'DROP TABLE IF EXISTS viajesVotes, viajesPhotos, viajes, users',
        );

        console.log('Creating tables...');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(100) PRIMARY KEY,
                email VARCHAR(100) UNIQUE NOT NULL,
                username VARCHAR(30) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                avatar VARCHAR(100),
                active BOOLEAN DEFAULT false,
                role ENUM('admin', 'normal', 'coordinador') DEFAULT 'normal',
                registrationCode CHAR(30),
                recoverPassCode CHAR(10),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )    
            `);

        await pool.query(
            `
                INSERT INTO users (id, email, username, password, role, active) VALUES (?, ?, ?, ?, ?, ?)`,
            [id, ADMIN_EMAIL, ADMIN_USERNAME, hashedPass, ADMIN_ROLE, 1],
        );

        await pool.query(`
            CREATE TABLE IF NOT EXISTS viajes (
                id VARCHAR(100) PRIMARY KEY,
                destino VARCHAR(50) NOT NULL,
                fechaDeInicio DATETIME NOT NULL,
                fechaDeFin DATETIME NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )    
            `);

        // Creamos la tabla de fotos.
        await pool.query(`
            CREATE TABLE IF NOT EXISTS viajesPhotos (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                viajeId VARCHAR(100) NOT NULL,
                FOREIGN KEY (viajeId) REFERENCES viajes(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
            `);

        // Tabla de votos.
        await pool.query(`
            CREATE TABLE IF NOT EXISTS viajesVotes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                value TINYINT UNSIGNED NOT NULL,
                userId VARCHAR(100) NOT NULL,
                viajeId VARCHAR(100) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (viajeId) REFERENCES viajes(id)
            )
            `);

        console.log('Tables created!');

        process.exit(0);
    } catch (err) {
        console.error(err);

        process.exit(1);
    }
};

createTables();
