// @see: https://gist.github.com/branneman/8048520
require('app-module-path').addPath(__dirname + '/lib');

var express = require('express');



var server = require('nodebootstrap-server')
  , appConfig = require('./appConfig')
  , app    = express();

app.use(express.static(__dirname + '/public'));   //hnote: add public folder, not sure why node_modules\nodebootstrap-htmlapp not set it

app = require('nodebootstrap-htmlapp').setup(app);


process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging here
});

server.setup(app, appConfig.setup);
