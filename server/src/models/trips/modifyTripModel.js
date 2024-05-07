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
    viajeId
    ) => {

    const pool = await getPool();
    
    // Verifica y actualiza los items en la base de datos.

    if (titulo) {
        const [tituloExist] = await pool.query(
            `SELECT id FROM viajes WHERE titulo = ?`,
            [titulo],
        );

        if (tituloExist.length> 0) {
            viajeId = tituloExist[0].id;
        }

        await pool.query(`UPDATE viajes SET titulo = ? WHERE id = ?`,
         [titulo, viajeId]
        );
    }


    if (descripcion) {
        const [descripcionExist] = await pool.query(
            `SELECT id FROM viajes WHERE descripcion = ?`,
            [descripcion],
        );

        if (descripcionExist.length> 0) {
            viajeId = descripcionExist[0].id;
        }

        await pool.query(`UPDATE viajes SET descripcion = ? WHERE id = ?`,
         [descripcion, viajeId]
        );
    }


    if (destino) {
        const [destinoExist] = await pool.query(
            `SELECT id FROM viajes WHERE destino = ?`,
            [destino],
        );

        if (destinoExist.length> 0) {
            viajeId = destinoExist[0].id;
        }

        await pool.query(`UPDATE viajes SET destino = ? WHERE id = ?`,
         [destino, viajeId]
        );
    }


    if (fechaDeInicio) {
        const [fechaDeInicioExist] = await pool.query(
            `SELECT id FROM viajes WHERE fechaDeInicio = ?`,
            [fechaDeInicio],
        );

        if (fechaDeInicioExist.length> 0) {
            viajeId = fechaDeInicioExist[0].id;
        }

        await pool.query(`UPDATE viajes SET fechaDeInicio = ? WHERE id = ?`,
         [fechaDeInicio, viajeId]
        );
    }
    

    if (fechaDeFin) {
        const [fechaDeFinExist] = await pool.query(
            `SELECT id FROM viajes WHERE fechaDeFin = ?`,
            [fechaDeFin],
        );

        if (fechaDeFinExist.length> 0) {
            viajeId = fechaDeFinExist[0].id;
        }

        await pool.query(`UPDATE viajes SET fechaDeFin = ? WHERE id = ?`,
         [fechaDeFin, viajeId]
        );
    }


    if (plazasMinimas) {
        const [plazasMinimasExist] = await pool.query(
            `SELECT id FROM viajes WHERE plazasMinimas = ?`,
            [plazasMinimas],
        );

        if (plazasMinimasExist.length> 0) {
            viajeId = plazasMinimasExist[0].id;
        }

        await pool.query(`UPDATE viajes SET plazasMinimas = ? WHERE id = ?`,
         [plazasMinimas, viajeId]
        );
    }


    if (plazasMaximas) {
        const [plazasMaximasExist] = await pool.query(
            `SELECT id FROM viajes WHERE plazasMaximas = ?`,
            [plazasMaximas],
        );

        if (plazasMaximasExist.length> 0) {
            viajeId = plazasMaximasExist[0].id;
        }

        await pool.query(`UPDATE viajes SET plazasMaximas = ? WHERE id = ?`,
         [plazasMaximas, viajeId]
        );
    }


    if (ruta) {
        const [rutaExist] = await pool.query(
            `SELECT id FROM viajes WHERE ruta = ?`,
            [ruta],
        );

        if (rutaExist.length> 0) {
            viajeId = rutaExist[0].id;
        }

        await pool.query(`UPDATE viajes SET ruta = ? WHERE id = ?`,
         [ruta, viajeId]
        );
    }


    if (precio) {
        const [precioExist] = await pool.query(
            `SELECT id FROM viajes WHERE precio = ?`,
            [precio],
        );

        if (precioExist.length> 0) {
            viajeId = precioExist[0].id;
        }

        await pool.query(`UPDATE viajes SET precio = ? WHERE id = ?`,
         [precio, viajeId]
        );
    }


    if (activo) {
        const [actividad] = await pool.query(
            `SELECT id FROM viajes WHERE activo = ?`,
            [activo],
        );

        if (actividad.length> 0) {
            viajeId = actividad[0].id;
        }

        await pool.query(`UPDATE viajes SET activo = ? WHERE id = ?`,
         [activo, viajeId]
        );
    }


    if (confirmado) {
        const [estado] = await pool.query(
            `SELECT id FROM viajes WHERE confirmado = ?`,
            [confirmado],
        );

        if (estado.length> 0) {
            viajeId = estado[0].id;
        }

        await pool.query(`UPDATE viajes SET confirmado = ? WHERE id = ?`,
         [confirmado, viajeId]
        );
    }

}

export default modifyTripModel;