//controlador
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
	$scope.app = "Lista Telefônica"
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		$http.get("http://localhost:3000/contatos").success(function (data) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possivel carregar os dados!"
		});
	};

	var carregarOperadoras = function () {
		$http.get("http://localhost:3000/operadoras").success(function (data) {
			$scope.operadoras = data;
		});
	};

	$scope.adicionarContato = function (contato) {
		$http.post("http://localhost:3000/contatos", contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});