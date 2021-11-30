import express from 'express'
import { routerCategoria } from './src/rutas/routerCategoria.js'

function crearServidor() {
console.log("entra")
    const app = express()

    app.use(express.json())

    app.use('/categorias', routerCategoria)

    let server

    return {
        conectar: (puerto = 0) => {
            return new Promise((resolve, reject) => {
                server = app.listen(puerto)
                server.on('request', request => { console.log(`${new Date().toLocaleString()}: ${request.method} ${request.url}`) })
                server.on('listening', () => { resolve(server) })
                server.on('error', error => { reject() })
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                server.close(error => {
                    if (error) reject(error)
                    else resolve()
                })
            })
        }
    }
}

export { crearServidor }