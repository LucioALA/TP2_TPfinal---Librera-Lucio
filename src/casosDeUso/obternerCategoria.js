//import  { fromDTO } from '../modelos/Categoria.js'

async function obtenerCategoria(daoCategoria, id) {    
    const categoria = await daoCategoria.buscar(id)
    return categoria
}

export { obtenerCategoria }
