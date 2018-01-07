var express = require('express');
var app = express();
app.listen(8000);

app.use(express.static('public'));
app.use(express.static('node_modules'));

$.get({
    url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=93e2665f1cd045ad6408147288567c99",
    success: yourFunction		
    }
);

app.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
  });

  app.get('/anotherRoute', function(request, response){
    response.send("Hey, I'm another route!");
  });

  app.get('/me', function(request, response){
    response.send({name: 'Ahron', food: 'Pizza'})
  });