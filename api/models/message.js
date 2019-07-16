'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
    text: String,
    created_at: String,
    emitter: { type: Schema.ObjectId, ref: 'User'},
    receiver: { type: Schema.ObjectId, ref: 'User'}
});

//Message es el nombre de la entidad 
module.exports = mongoose.model('Message', MessageSchema );