 'use strict';

 const fs = require('fs');
 const express = require('express');
 const app = express();
 const routes = require('./app/routes');
 const bodyParser = require('body-parser');
 const methodOverride = require('method-override');
 require('dotenv').config({
     path: './.env'
 })
 const port = process.env.PORT || 8000;
 const mongoose = require('mongoose');

 mongoose.connect("mongodb://localhost:27017/test");

 const db = mongoose.connection;

 db.on('error', () => {
     console.log("Error connecting to database");
 });
 db.once('open', () => {
     console.log('Database Connected');
 })

 app.use(bodyParser.json()); // parse application/json
 app.use(bodyParser.json({
     type: 'application/vnd.api+json'
 })); // parse application/vnd.api+json as json
 app.use(bodyParser.urlencoded({
     extended: true
 })); // parse application/x-www-form-urlencoded

 app.use(methodOverride('X-HTTP-Method-Override'));
 app.use('/public', express.static(process.cwd() + '/public'));

 routes(app);

 app.listen(port, function() {
     console.log('Node.js listening ...');
 });

 exports = module.exports = app;
