//el modelo interactúa con la DB

const conectionDb = require('.../db/conectionDb.js')

const agregarPost = async (titulo, descripcion, img, likes = 0) => {
    try {
        const agrega = await conexion.query(`insert into posts
    (titulo, descripcion, img, likes) values ($1, $2, $3, $4)`, [titulo, img, descripcion, likes])
        return agrega
        
    } catch {
        console.log(error);
    }
}
module.export = { agregarPost }