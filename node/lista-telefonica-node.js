var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var operadoras = [
  {nome:"Oi", codigo: 11},
  {nome:"Vivo", codigo: 12},
  {nome:"Tim", codigo: 13},
  {nome:"Claro", codigo: 14}
]
var contatos = [
  {nome:"costelinha", telefone:"2222-2222", operadora:operadoras[0]},
  {nome:"nubis", telefone:"3333-3333",operadora:operadoras[2]},
  {nome:"alexaLins", telefone:"1111-1111",operadora:operadoras[1]}
];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});


var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);