/*
-conexion a mongoDB
-conexion de un servidor con node
-se van realizando peticiones
-será la carga principal del backend
*/ 


// permite utilizar nuevas caracteristicas de javascript
'use strict'

// libreria de moongose
// permitira trabajar con la base de datos
var mongoose = require('mongoose');
//despues de crear el fichero app se crea express
var app = require('./app');
//se pueden poner variables de entorno en port
var port = 3800;

//conexion a base de datos con metodos de promesas
//se conectará como cliente a mongoDB
mongoose.Promise = global.Promise;					//ahora en ves de {useMongoClient: true} se utiliza {useNewUrlParser: true}
mongoose.connect('mongodb://localhost:27017/red_social', {useNewUrlParser: true})
	.then(() => {
		console.log("La conexión a la base de datos Red Social se a conectado correctamente");

		//crear servidor 
		app.listen(port, () => {
			console.log("Servidor corriendo en http://localhost:3800");
		});
	})
	.catch(err => console.log(err));