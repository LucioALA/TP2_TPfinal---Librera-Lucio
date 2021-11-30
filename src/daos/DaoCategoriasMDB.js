import { db } from '../config.js'
import DaoCategorias from './DaoCategorias.js'
import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database
const serverUrl= db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`


const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })

await client.connect()



class DaoCategoriasMDB extends DaoCategorias {

    constructor() {
        super()
        this.categorias = client.db("Restaurante").collection("Categorias")
    }

    async buscar(id) {
        let buscada
        try {
            buscada = await this.categorias.findOne({ id })
            
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }

        delete buscada._id

        return buscada
    }

    async guardar(categoria) {
        try {
            await this.categorias.replaceOne({ id: categoria.id }, { ...categoria }, { upsert: true })
            
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }
}

export default DaoCategoriasMDB