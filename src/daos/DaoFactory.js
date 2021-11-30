import DaoCategoriasMDB from './DaoCategoriasMDB.js'
import DaoCategoriaMem from './DaoCategoriaMem.js'

import { tipoGuarda } from '../config.js'

let daoCategorias
console.log("entradaofactory")
switch (tipoGuarda) {
   
    case 'MDB':
        daoCategorias = new DaoCategoriasMDB()
        break;
    case 'MEM':
        daoCategorias = new DaoCategoriaMem()
        break;
    default:
        daoCategorias = new DaoCategoriaMem()
}

function getDao() {
    return daoCategorias
}

export { getDao }