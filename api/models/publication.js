'use strict'

//variable para cargar el modulo de mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
	text: String,
	file: String,
	created_at: String,
	//se guardara un id de otro documento
	user:{ type: Schema.ObjectID, ref: 'User'}
});

//usar este modulo fuera de la clase
module.exports = mongoose.model('Publication' , PublicationSchema);