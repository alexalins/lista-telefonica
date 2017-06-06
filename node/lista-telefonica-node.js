var router = require('./router');

var app = router(3412);

var operadoras = [
	{nome:"Oi", codigo: 11},
	{nome:"Vivo", codigo: 12},
	{nome:"Tim", codigo: 13},
	{nome:"Claro", codigo: 14}
]
var contatos = [
	{nome:"Costelinha", telefone:"2222-2222", operadora:operadoras[0]},
	{nome:"Nubis", telefone:"3333-3333",operadora:operadoras[2]},
	{nome:"AlexaLins", telefone:"1111-1111",operadora:operadoras[1]}
];

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.post('/contatos', function(req, res){
	res.end();
});