import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './env.js';

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});