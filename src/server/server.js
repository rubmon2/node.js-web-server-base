import express from "express"
import path  from "path"
// const express=require("express")

// const path = require("path")


export const startServer=(option)=>{
    const {port, public_path="public"}=option

    const app=express()
//usamos el middleware  y definimos que carpeta public este disponible
    app.use(express.static(public_path))

//cualquier consulta a la url mostrara la carpeta
app.get("*", (req,res)=>{

    const indexPath=path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath)
})

//si visitimamos la url en el puerto especificado, veremos la pagina
app.listen(port,()=>{console.log("app escuchando en el puerto", port)})

}


// module.exports={
//     startServer
// }