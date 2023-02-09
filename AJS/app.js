// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function ($scope) {
	$scope.acc = {};
	$scope.list_acc = [
		{
			name: "Phu Tam",
			email: "phutamytb@gmail.com",
			password: "123456",
			phone: 0123457023
		},
		{
			name: "Anh Duy",
			email: "anhduy@gmail.com",
			password: "123456",
			phone: 0111111111
		},
		{
			name: "Tuan Kien",
			email: "tuankien@gmail.com",
			password: "123456",
			phone: 0122222222
		}
	]

	$scope.save = function() {
		$scope.list_acc[$scope.index] = angular.copy($scope.acc)
	}
	$scope.index = -1
	$scope.edit = function(index) {
		$scope.index = index;
		$scope.acc = angular.copy($scope.list_acc[index])
	}
	$scope.cancel = function() {
		if ($scope.index < 0) {
			$scope.clear();
		}else {
			$scope.edit($scope.index)
		}
	}
	$scope.insert = function() {
		$scope.list_acc.push($scope.acc);
		$scope.index = $scope.list_acc.length -1;
	}
	$scope.update = function() {
		$scope.list_acc[$scope.index] = angular.copy($scope.acc)
	}
	$scope.delete = function() {
		$scope.list_acc.splice($scope.index, 1)

		$scope.clear();
	}
	$scope.clear = function () {
		$scope.acc = {};
		$scope.index = -1;
	}
});