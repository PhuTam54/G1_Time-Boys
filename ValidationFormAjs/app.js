// create angular app
(function () {
	angular
		.module('validationApp', [])
		.controller('validationCtrl', validationCtrl)

		validationCtrl.$inject = ['$scope']
		
		function validationCtrl($scope) {
			$scope.acc = {};
			$scope.list_acc = [
				{
					name: "Phu Tam",
					email: "phutamytb@gmail.com",
					password: "123456",
					phone: 99999999
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
			// ADD FUNCTION 
			$scope.add = function() {
				$scope.list_acc.push($scope.acc);
				$scope.index = $scope.list_acc.length -1;
			}
			// UPDATE FUNCTION 
			$scope.update = function() {
				$scope.list_acc[$scope.index] = angular.copy($scope.acc)
			}
			// DELETE FUNCTION 
			$scope.delete = function() {
				$scope.list_acc.splice($scope.index, 1)
		
				$scope.clear();
			}
			// CANCEL FUNCTION 
			$scope.cancel = function() {
				if ($scope.index < 0) {
					$scope.clear();
				}else {
					$scope.edit($scope.index)
				}
			}
			// CLEAR FUNCTION 
			$scope.clear = function () {
				$scope.acc = {};
				$scope.index = -1;
			}
			// EDIT FUNCTION 
			$scope.index = -1
			$scope.edit = function(index) {
				$scope.index = index;
				$scope.acc = angular.copy($scope.list_acc[index])
			}
		}
})();

