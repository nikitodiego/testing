import {Router} from 'express';
import Factory from '../contenedores/factory.js';
/*
import productoMongo from '../daos/productoDaoMongoDB.js';
import productoFire from '../daos/productoDaoFirebase.js'
import productoFile from '../daos/productoDaoFilesystem.js'
*/
import {} from 'dotenv/config'

const producto = Factory.getInstance().createPersistance();

//const factory = new Factory;
//const producto = factory.createPersistance();
//const producto = process.env.DB==="mongo" ? productoMongo : process.env.DB==="firebase" ? productoFire : productoFile 

const productosApiRouter = Router();

productosApiRouter.get('/',(req,res) =>{
        producto.listAll(res);
})

productosApiRouter.get('/:id',(req,res) =>{
    const { id } = req.params;
    producto.listById(res,id);
})

productosApiRouter.post('/', (req, res) => {
    producto.create(req,res);
});

productosApiRouter.put('/:id',(req,res) =>{
    const { id } = req.params;
    producto.updateById(req,res,id);
})

productosApiRouter.delete('/:id',(req,res) =>{
    const { id } = req.params;
    producto.deleteById(req,res,id);
})

export default productosApiRouter;