
  
import { crearCategoria } from '../src/casosDeUso/altaCategoria.js'
import { modificarNombreCategoria } from '../src/casosDeUso/modificarNombreCategoria.js'
import { obtenerCategoria } from '../src/casosDeUso/obternerCategoria.js'

import { getDao } from '../src/daos/DaoFactory.js'

const daoCategoria = getDao()

try {
    const categoria1 = await crearCategoria(daoCategoria, "postres")
    const categoria2 = await crearCategoria(daoCategoria, "pizzas")
    const categoria3 = await crearCategoria(daoCategoria, "ensaladas")
    const categoriaObtenida = await obtenerCategoria(daoCategoria,2)
    console.log(categoria1, categoria2, categoria3, categoriaObtenida.nombre)
    const categmodif = await modificarNombreCategoria(daoCategoria,1, "holaaa")
    console.log(categmodif)
    
} catch (error) {
    console.log(error)
}
