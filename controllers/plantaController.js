import {db} from '../db/conn.js'

const getPlanta = async (req,res)=>{

    const sql = `select a.id,
                        a.nombre as nombre_planta,
                        a.tipo,
                        b.nombre as nombre_zona
                    from tbl_planta a
                    inner join tbl_zonas_jardin b
                    on a.id_zona = b.id`;
                    
    const result = await db.query(sql);
 
    res.json(result)
 
 }

 const postPlanta = async (req,res)=>{

    const { nombre, tipo, id_zona } = req.body;

    const params = [nombre, tipo, id_zona];

    const sql = `insert into tbl_planta
                (nombre, tipo, id_zona)
                values
                ($1, $2, $3) returning * `

    const result = await db.query(sql, params);

    res.json(result);
}

const putPlanta = async (req, res)=>{

    const { nombre, tipo, id_zona } = req.body
    const {id} = req.params

    const params = [
        nombre,
        tipo,
        id_zona,
        id
    ]

    const sql = `update tbl_planta
                set
                    nombre = $1,
                    tipo = $2
                    id_zona = $3
                where id = $4 returning *`

    const result = await db.query(sql, params)

    res.json(result);
} 

const deletePlanta = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_planta where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getPlanta, postPlanta, putPlanta, deletePlanta}