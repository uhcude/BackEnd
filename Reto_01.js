var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomID = faker.random.uuid();
  var randomNombre = faker.name.findName();
  var randomContenido = faker.lorem.sentence();
  var randomIP = faker.internet.ip();
  var randomFecha = faker.date.past();
  var randomImagen = faker.image.people();
 

  return {
    id: randomID,
    nombre: randomNombre,
    contenido: randomContenido,
    ip: randomIP,
    fecha: randomFecha,
    imagen: randomImagen
  }

}

app.get('/', function (req, res) {
  res.send('Reto 01');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos en lista');
})


app.listen(3000);
