'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');
var anzahl = 0;
var str;
app.get('/',function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){

  function auslesen() {
    fs.readdir('./public/pics/', function doneread(err, direcs) {
      var astr = direcs.toString();
      str = astr.split(',');
      ausgabe();
    });
  }

  function ausgabe() {
    anzahl = 0;
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
        anzahl++;
    }
    console.log(anzahl);
    io.emit('loaded', anzahl);
    return anzahl;
  }

socket.on('loadlist', function(){
  auslesen();
});


});

http.listen(3000, function(){
  console.log('listening on :3000');
});
