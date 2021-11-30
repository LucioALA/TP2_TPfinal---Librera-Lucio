import nodemailer from 'nodemailer';


export default class EnviadorDeMails {
    constructor(config) {
        this.transporter = nodemailer.createTransport(config)
        this.DIRECCION_DESDE = config.auth.user
    }

    async enviar(datos) {
        
        if(!datos.destinatario || datos.destinatario ==""){
            throw new Error("El destinatario no puede estar vacío")
        }

        const mailOptions = {
            from: this.DIRECCION_DESDE,
            to: datos.destinatario,
            subject: datos.asunto,
            text: datos.contenido
        }

        try {
            await this.transporter.sendMail(mailOptions);
        } catch (error) {
            throw new Error(`EMAIL_ERROR: ${error.message}`)
        }
    }
}
