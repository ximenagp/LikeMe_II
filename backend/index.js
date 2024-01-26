const { getPosts, agregarPost,like, eliminarPost } = require("./consultas")
const express = require("express");
const cors =require ("cors")
const app = express()

//levanta el servidor
app.listen(3000, console.log("servidor levantado"))

app.use(express.json())
app.use(cors())

//ruta que permite que el fronted reciba los registros a bd
app.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts)
})
app.post("/posts", async(req,res)=>{
    const {titulo, descripcion, img, likes} = req.body
    agregarPost(titulo, descripcion, img, likes)
    res.status(201).json("Post agregado")
})
app.put("/posts/like/:id", async (req, res) => {
    const {id} = req.params
    await like(id)
    res.send("Like actualizado")
})

app.delete("/posts/:id", async (req, res) => {
    const {id} = req.params
    await eliminarPost(id);
    res.send("Post eliminado con exito")
})