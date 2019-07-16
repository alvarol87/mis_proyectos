'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//definiciones de rutas
//el path sera home y el metodo 
api.get('/home', UserController.home);
api.get('/pruebas', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;