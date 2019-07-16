//configuracion de express
//se importa al index


'user strict'

var express = require('express');
//convierte las peticiones a obejto de javascript
var bodyParser =  require('body-parser');

var app = express();

//cargar rutas 
/* una vez que se tenga las clases con rutas se deben cargar */
var user_routes = require('./routes/user');

//1ro middlewares (metodo que se ejecuta antes de llegar al controlador)
app.use(bodyParser.urlencoded({extended:false}));
//convierte la peticion a un objeto Json
app.use(bodyParser.json());

//cors

//3ro rutas
/* 
	el app.use permite hacer middlewares para que la accion 
	se ejecute antes que el controlador
	será /api/nombre_metodo
*/
app.use('/api', user_routes);

/*
rutas de ejemplo
app.get('/', (request, response) => {
	response.status(200).send({
		message: 'Hola Mundo desde el servidor de NodeJS'
	});
});

app.post('/pruebas', (request, response) => {
	console.log(request.body); 
	response.status(200).send({
		message: 'Acción de pruebas en el servidor de NodeJS'});
});

*/
// app.get('/pruebas', (request, response) => {
// console.log(request.body); response.status(200).send({
//	message: 'Acción de pruebas en el servidor de NodeJS'});
// });
//2do exportar
module.exports = app;