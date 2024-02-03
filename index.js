import express from 'express';
import { planta } from './routes/apiPlantas.js'
import { zona } from './routes/apiZona.js'

const app = express();

//middlewares

app.use(express.json());

const port = 3000;

app.use('/api/plantas', planta);
app.use('/api/zona', zona);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})