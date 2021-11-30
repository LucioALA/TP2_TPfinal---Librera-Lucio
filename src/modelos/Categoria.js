class Categoria{

    constructor(id, nombre){

        this.id=id
        this.setNombre(nombre)

    }


    setNombre(nombre){
        if(!nombre || nombre == ""){
            throw new Error("nombre no puede estar vacio ni nulo ni ser un numero")
        }
        this.nombre = nombre
    }


    static ultimoId = 0
    static nextId(){
        return ++Categoria.ultimoId
    }

}
function fromDTO(dto) {
    return new Categoria(dto.id, dto.nombre)
}

function toDTO(categ) {
    return {
        id: categ.id,
        nombre: categ.nombre
        
    }
}

export { fromDTO, toDTO }

export default Categoria