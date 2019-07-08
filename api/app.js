//configuracion de express
//se importa al index


'user strict'

var express = require('express');
//convierte las peticiones a obejto de javascript
var bodyParser =  require('body-parser');

var app = express();

//cargar rutas 

//1ro middlewares (metodo que se ejecuta antes de llegar al controlador)
app.use(bodyParser.urlencoded({extended:false}));
//convierte la peticion a un objeto Json
app.use(bodyParser.json());

//cors

//3ro rutas
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

// app.get('/pruebas', (request, response) => {
// console.log(request.body); response.status(200).send({
//	message: 'Acción de pruebas en el servidor de NodeJS'});
// });
//2do exportar
module.exports = app;