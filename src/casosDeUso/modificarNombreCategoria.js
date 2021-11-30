import { fromDTO, toDTO } from '../modelos/Categoria.js'
import EnviadorDeMails from '../modulos/envioDeMails/EnviadorDeMails.js'
import { emailConfig } from './../config.js'

const env=new EnviadorDeMails(emailConfig)

const datos={ 
    destinatario:'luciolibrera@gmail.com',
    asunto:'Modificación de categoria', 
    contenido:'' 
}


async function modificarNombreCategoria(daoCategoria, id, nuevoNombre) {
    const categoria = fromDTO(await daoCategoria.buscar(Number(id)))

    datos.contenido="Se ha cambiado la categoria "+categoria.nombre

    categoria.setNombre(nuevoNombre)

    await daoCategoria.guardar(toDTO(categoria))
    datos.contenido+=" por " + categoria.nombre
    
    env.enviar(datos)
    return categoria
}

export { modificarNombreCategoria}