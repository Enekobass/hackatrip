import express from 'express';

import cors from 'cors';

import morgan from 'morgan';

import { PORT } from './env.js';

//import routes from './src/routes/index.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

//app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
