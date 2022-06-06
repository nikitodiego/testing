import contenedorMongoDB from "../contenedores/contenedorMongoDB.js";
import contenedorFirebase from "../contenedores/contenedorFirebase.js"
import contenedorFilesystem from "../contenedores/contenedorFilesystem.js"

let instance = null

class Factory {

    static getInstance() {
        if (!instance) {
            instance = new Factory()
        }
        return instance
    }

    createPersistance() {
        if (process.env.DB === "mongo") return contenedorMongoDB.getInstance();
        if (process.env.DB === "firebase") return contenedorFirebase.getInstance();
        if (process.env.DB === "filesystem") return contenedorFilesystem.getInstance();
    }
}

export default Factory

