
import Categoria, { toDTO } from '../modelos/Categoria.js'
import EnviadorDeMails from '../modulos/envioDeMails/EnviadorDeMails.js'
import { emailConfig } from './../config.js'

const env=new EnviadorDeMails(emailConfig)

const datos={ 
    destinatario:'luciolibrera@gmail.com',
    asunto:'Creación de categoria', 
    contenido:'' 
}


async function crearCategoria(daoCategoria, nombre) {
   
  

    console.log("entra crearcategoria")
    const id = Categoria.nextId()
    const categoria = new Categoria(id, nombre)
    await daoCategoria.guardar(toDTO(categoria))
    datos.contenido="Se ha creado la categoria " + nombre
    
    env.enviar(datos)
    return categoria
}

export { crearCategoria }