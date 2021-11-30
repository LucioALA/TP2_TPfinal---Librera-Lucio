import { Router } from 'express'
import { crearCategoria} from '../casosDeUso/altaCategoria.js'
//import { modificarCategoria } from './src/casosDeUso/modificarCategoria.js'
import { getDao } from '../daos/DaoFactory.js'
import { verificarUsuario,generarToken, verifyToken } from '../modulos/Login/token.js'

const usuarioEnBD={
    id:1,
    nombre:'enrique',
    edad:24,
    contraseña:'hola'
}
const usuarioLogeando ={
    id:1,
    nombre:'enrique',
    edad:24,
    contraseña:'hola'
}
const daoCategoria = getDao()

const routerCategoria = Router()

routerCategoria.post("/login", (req , res) => {
    
    console.log("entra login")
    verificarUsuario(usuarioLogeando,usuarioEnBD)
    res.json(generarToken(usuarioLogeando))

   

});

routerCategoria.post('/',verifyToken, async (req, res) => {
    console.log("acaaaa")
    try {
        const { nombre } = req.body
        const categoria = await crearCategoria(daoCategoria, nombre)
        res.json(categoria)
    } catch (error) {
        res.json({ error: "no se pudo crear: " + error.message })
    }
})

routerCategoria.patch('/:idCategoria', async (req, res) => {
    console.log("holj")
    const {  nombre  } = req.body

    const { id } = req.params
    try {
        const modificada = await modificarCategoriaNombre(daoCategoria, id, nombre)
        res.json(modificada)
        
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})



export { routerCategoria }