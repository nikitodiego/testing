
import express from 'express'
import productosApiRouter from './routers/productos.js'
import carritosApiRouter from './routers/carritos.js'

//Instancia servidor y API
const app = express()

//Configuracion servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Conexion Mongo
import mongoose from 'mongoose'
mongoose
    .connect("mongodb+srv://nicojapaz:Spirit01@cluster0.guz7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log("Connected"))
    .catch(error => console.error(error));

//rutas del servidor API Rest
app.use('/api/productos', productosApiRouter)
app.use('/api/carritos', carritosApiRouter)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))

export default app;