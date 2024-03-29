import express from 'express'
const categoria = express();
import {getCategoria,
        postCategoria,
        putCategoria,
        deleteCategoria
    } from "../controllers/categoriaController.js";

categoria.get('', getCategoria );

categoria.post('', postCategoria);

categoria.put( '/:id', putCategoria)

categoria.delete( '/:id', deleteCategoria)

export { categoria }