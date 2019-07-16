'use strict'

//para cifrar contraseña se carga el modulo instalado de node js
var bcrypt = require('bcrypt-nodejs');

//llamada al modelo user
var User = require('../models/user');

//metodos de prueba
function home(req, res){
    console.log(req.body);
    console.log("Entro en Home");
    res.status(200).send({
        message: 'Hola mundo desde el controlador'
    });
}

function pruebas(req, res){
    console.log(req.body);
    console.log("Entro en pruebas");
    res.status(200).send({
        message: 'Accion de prueba desde el controlador'
    });
}

function saveUser(req, res){
    console.log(req.body);
    var params = req.body;
    var user = new User();
    
    /* si pasa correctamente se debe cifrar la contraseña  con bcrypt */
    if( params.name &&
        params.surname &&
        params.nick &&
        params.email && 
        params.password ){
            user.name = params.name;
            user.surname = params.surname;
            user.nick = params.nick;
            user.email = params.email;
            user.role = 'ROLE_USER';
            user.image = null;

            bcrypt.hash(params.password, null, null, (err, hash) => {
                user.password = hash;

                user.save((err, userStored) => {
                    if(err) return res.status(500).send({message: 'Error al guardar el usuario'})
                    
                    if(userStored){
                        res.status(200).send({
                            user: userStored
                        });
                    }else{
                        res.status(400).send({
                            message: 'No se ha registrado el usuario'
                        });
                    }
                })
            });
            
    }else{
        res.status(200).send({
            message: 'Debe llenar todos los campos'
        });
    }
}


module.exports = {
    home,
    pruebas,
    saveUser
}