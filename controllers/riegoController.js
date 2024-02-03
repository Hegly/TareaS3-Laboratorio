import {db} from '../db/conn.js';

const getRiego = async (req,res)=>{

    const sql = `select * from tbl_riego`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postRiego = async (req,res)=>{

    const { tipo, fecha_riego, tiempo_riego } = req.body;

    const params = [tipo, fecha_riego, tiempo_riego];

    const sql = `insert into tbl_riego
                (tipo, fecha_riego, tiempo_riego)
                values
                ($1, $2, $3) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putRiego = async (req, res)=>{

    const { tipo, fecha_riego, tiempo_riego } = req.body;
    const {id} = req.params

    const params = [
        tipo, 
        fecha_riego, 
        tiempo_riego,
        id
    ]

    const sql = `update tbl_riego
                set
                    tipo = $1,
                    fecha_riego = $2, 
                    tiempo_riego = $3,
                    where id = $4
                    returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteRiego = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_riego where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getRiego, postRiego, putRiego, deleteRiego}