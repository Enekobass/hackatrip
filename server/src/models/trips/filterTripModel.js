import getPool from '../../db/getPool.js';

const filterTripModel = async (filtro) => {
    const pool = await getPool();

    // Construir la consulta SQL basada en el filtro
    let sql = 'SELECT * FROM viajes';

    const conditions = [];
    const values = [];

    // Ejemplo de filtro por destino
    if (filtro.destino) {
        conditions.push('destino = ?');
        values.push(filtro.destino);
    }

    // Otros filtros pueden añadirse aquí según sea necesario

    // Combinar condiciones en una cláusula WHERE
    if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
    }

    // Ejecutar la consulta utilizando el pool de conexiones
    const [rows, fields] = await pool.query(sql, values);

    // Devolver los resultados
    return rows;
};

export default filterTripModel;

