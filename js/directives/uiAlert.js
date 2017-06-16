angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "../../alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title: "@"
		},
		transclude: true
	};
});