import { Router } from 'express'

//import { modificarCategoria } from './src/casosDeUso/modificarCategoria.js'
import { verificarUsuario,generarToken } from '../modulos/Login/token.js'

const usuarioEnBD={
    id:1,
    nombre:'enrique',
    edad:24,
    contraseña:'holaa'
}
const usuarioLogeando ={
    id:1,
    nombre:'enrique',
    edad:24,
    contraseña:'holaa'
}
const daoCategoria = getDao()

const routerCategoria = Router()

routerCategoria.post("/login", (req , res) => {
    
    console.log("entra login")
    verificarUsuario(usuarioLogeando,usuarioEnBD)
    res.json(generarToken(usuarioLogeando))
   

});
