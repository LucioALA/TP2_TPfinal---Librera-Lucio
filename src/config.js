const tipoGuarda = 'MDB'

const db = {
    serverUrl: 'cluster0.4hevv.mongodb.net',
    username: 'user',
    password: '1234',
    database: 'Restaurante',
}

const emailConfig={
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'abagail.swaniawski10@ethereal.email',
        pass: '847HexfQvnFUUXKqsF'
    },
    tls: {
        rejectUnauthorized: false
    }
};

export {
    tipoGuarda,
    db,
    emailConfig
}

