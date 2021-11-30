
import jwt from "jsonwebtoken"



function generarToken(usuarioLogeando){
    const token=jwt.sign({usuarioLogeando}, 'secretkey', {expiresIn: '3s'});
    return token
    
}

function verificarUsuario(userL,userBD){
    
    if((userL.contraseña==userBD.contraseña) && (userL.nombre==userBD.nombre)){
        console.log(userL.contraseña)
        return true
    }else{
        throw Error('contraseña o usuario incorrecto')
    }
}
// app.post("/api/posts", verifyToken, (req , res) => {

//     jwt.verify(token, 'secretkey', (error, user) => {
//         if(error){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                     mensaje: "Post fue creado",
                    
//                 });
//         }
//     });
// });

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    console.log("entra verifytoken")
     const token =  req.headers['access-token'];

     if(token){
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if(err){
               return res.json({mensaje:"token invalido"})
            }else{
                req.user =decoded;

                next();
            }
        });
          
     }else{
         res.send({mensaje:"no hay token"})
     }
}


export{generarToken,verificarUsuario,verifyToken}