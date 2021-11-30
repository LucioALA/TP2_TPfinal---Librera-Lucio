export default class EnviadorDeMailsMock {

    async enviar({ destinatario, asunto, contenido }) {
        console.log(`mail a: ${destinatario} con asunto: ${asunto}`)
        console.log(`contenido: ${contenido}`)
    }
}
