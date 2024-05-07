import getPool from '../../db/getPool.js';

const modifyTripModel = async ( titulo,
    descripcion,
    destino,
    fechaDeInicio,
    fechaDeFin,
    plazasMinimas,
    plazasMaximas,
    ruta,
    precio,
    activo,
    confirmado,
    imagen,
    id
    ) => {

    const pool = await getPool();

    // Petición a la base de datos el rol de usuario para verificar/autorizar a los cambios.

    const [userRole] = await pool.query(
        `SELECT role FROM users WHERE role = ?`,
        [userId]
    ) ;

    const userAdmin = userRole[0].role;


    
    // Verifica y actualiza los items en la base de datos.

    if (titulo) {
        const [titulo] = await pool.query(
            `SELECT id FROM viajes WHERE titulo = ?`,
            [titulo],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET titulo = ? WHERE id = ?`, [
            titulo,
            id,
        ]);
    }



    if (descripcion) {
        const [descripcion] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            id,
        ]);
    }




    if (destino) {
        const [destino] = await pool.query(
            `SELECT id FROM viajes WHERE destino = ?`,
            [destino],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET destino = ? WHERE id = ?`, [
            destino,
            id,
        ]);
    }




    if (fechaDeInicio) {
        const [fechaDeInicio] = await pool.query(
            `SELECT id FROM viajes WHERE fechaDeInicio = ?`,
            [fechaDeInicio],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET fechaDeInicio = ? WHERE id = ?`, [
            fechaDeInicio,
            id,
        ]);
    }



    if (fechaDeFin) {
        const [fechaDeFin] = await pool.query(
            `SELECT id FROM viajes WHERE fechaDeFin = ?`,
            [fechaDeFin],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET fechaDeFin = ? WHERE id = ?`, [
            fechaDeFin,
            id,
        ]);
    }




    if (plazasMinimas) {
        const [plazasMinimas] = await pool.query(
            `SELECT id FROM viajes WHERE plazasMinimas = ?`,
            [plazasMinimas],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET plazasMinimas = ? WHERE id = ?`, [
            plazasMinimas,
            viajesId,
        ]);
    }



    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
    if (descripcion) {
        const [viajes] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (!userAdmin === admin) {
            unauthorizedUserError();
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`, [
            descripcion,
            viajes,
        ]);
    }
   
};

export default modifyTripModel;