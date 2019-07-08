'use strict'

var mongoose = require('mongoose');

//permite definir nuevos esquemas
var Schema = mongoose.Schema;

//variable userschema
//entidad reutiliable para usuarios
var UserSchema =  Schema ({
		name: String,
		surname: String,
		nick: String,
		email: String,
		password: String,
		role: String,
		image: String
});

//exportar modulo
//se llama a mongoose y al metodo model
//se debe indicar cual sera el nombre de la entidad
//se debe indicar cual es el esquema
//nombre de la entidad: User
//nombre de la esquema: UserSchema 
//se guardará en una colección en la base de datos llamada users
//se guardará en plural y minuscula
module.exports = mongoose.model('User', UserSchema);