'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = Schema({
	user: { type: Schema.ObjectId, ref: 'User'},
	followed: { type: Schema.ObjectId, ref: 'User'}
});

//usar este modulo fuera de la clase
module.exports = mongoose.model('Follow' , FollowSchema); 