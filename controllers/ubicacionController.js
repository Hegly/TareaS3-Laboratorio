import {db} from '../db/conn.js';

const getUbicacion = async (req,res)=>{

    const sql = `select * from tbl_ubicacion`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postUbicacion = async (req,res)=>{

    const { nombre, latitud, longitud } = req.body;

    const params = [nombre, latitud, longitud];

    const sql = `insert into tbl_ubicacion
                (nombre, latitud, longitud)
                values
                ($1, $2, $3) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putUbicacion = async (req, res)=>{

    const { nombre, latitud, longitud } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        latitud,
        longitud,
        id
    ]

    const sql = `update tbl_ubicacion
                set
                    nombre = $1,
                    latitud = $2,
                    longitud = $3,
                    where id = $4
                    returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteUbicacion = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_ubicacion where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getUbicacion, postUbicacion, putUbicacion, deleteUbicacion}