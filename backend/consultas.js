const {Pool} = require("pg");

// acceso a la base de datos
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "likeme",
    allowExitOnIdle: true
})
//obtiene desde la bd todos los registros
const getPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}
//crear registros en la BD, agregar posts
const agregarPost = async (titulo, descripcion, img, likes=0) => {
    try {
        const insertar = 'INSERT INTO posts VALUES(default,$1,$2,$3,$4) RETURNING *'
        const valores = [titulo, img, descripcion, likes];
        const result = await pool.query(insertar, valores);
        console.log("Post agregado con exito")
    } catch (error) {
        console.log(error);
    }
}
//modifica los likes, agrega/elimina
const like = async ( id) => {
    const consulta = "UPDATE posts SET likes = (likes + 1) WHERE id = $1";
    const valor = [id];
    const result = await pool.query(consulta, valor)
}
//elimina los posts
const eliminarPost = async ( id) => {
    const consulta = "DELETE FROM posts WHERE id = $1"
    const valor = [id];
    const result = await pool.query(consulta, valor)
}

module.exports = { getPosts, agregarPost, like, eliminarPost }