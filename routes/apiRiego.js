import express from 'express'
const riego = express();
import {getRiego,
        postRiego,
        putRiego,
        deleteRiego
    } from "../controllers/riegoController.js";

riego.get('', getRiego );

riego.post('', postRiego);

riego.put( '/:id', putRiego)

riego.delete( '/:id', deleteRiego)

export { riego }