import {db} from '../db/conn.js';

const getZona = async (req,res)=>{

    const sql = `select * from tbl_zona order by id`
    const result = await db.query(sql);
 
    res.json(result)
 
 }

 export {getZona }