import EnviadorDeMails from './EnviadorDeMails.js'
import EnviadorDeMailsMock from './EnviadorDeMailsMock.js'
import { emailConfig } from '../../config.js'

const edm = new EnviadorDeMails(emailConfig)
const edmm = new EnviadorDeMailsMock()

export function getEnviadorDeMails() {
    return edmm
}