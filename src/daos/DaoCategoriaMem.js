import DaoCategorias from './DaoCategorias.js'

class DaoCategoriaMem extends DaoCategorias {
    constructor() {
        super()
        this.categorias = []
    }

    async buscar(id) {
        const index = this.categorias.findIndex(p => p.id === id)
        if (index != -1) {
            return this.categorias[ index ]
        } else {
            throw new Error('Categoria no encontrada')
        }
    }

    async guardar(categoria) {
        console.log("entra guardar")
        const obj = this.categorias.find(p => p.nombre === categoria.nombre)
        const index = this.categorias.findIndex(o => o.id === categoria.id)
        if (!obj) {
            this.categorias.push(categoria)
        } else {
            
            this.categorias[ index ] = categoria
        }
    }
}

export default DaoCategoriaMem