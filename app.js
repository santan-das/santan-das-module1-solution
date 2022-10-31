
(function(){

var app = angular.module("LunchCheck", []);
app.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject = ["$scope", "$filter"];


function LunchCheckController($scope, $filter) {

	$scope.myFunc = function() {
		if($scope.name === undefined || $scope.name == "undefined" || $scope.name.length == 0) {
			$scope.message = "Please enter data first";
			// return false;
		} else if ($scope.name.split(",").length <= 3) {
			$scope.message = "Enjoy!";
			// return false;
		} else {
			$scope.message = "Too much!";
			// return false;
		}

		console.log("end");
	}
}
}
)(); 