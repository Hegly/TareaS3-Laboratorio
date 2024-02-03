import express from 'express';
import { planta } from './routes/apiPlantas.js'
import { zona } from './routes/apiZona.js'
import { riego } from './routes/apiRiego.js'
import { categoria } from './routes/apiCategoria.js'
import { ubicacion } from './routes/apiUbicacion.js'

const app = express();

//middlewares

app.use(express.json());

const port = 3000;

app.use('/api/plantas', planta);
app.use('/api/zona', zona);
app.use('/api/riego', riego);
app.use('/api/categoria', categoria);
app.use('/api/ubicacion', ubicacion);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})