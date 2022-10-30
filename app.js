

var app = angular.module("myShoppingList", []);
// app.controller("LunchCheckController", function($scope) {
//   $scope.products = ["Milk", "Bread", "Cheese"];
// });

LunchCheckController.$inject = ["$scope", "$filter"];
app.controller("LunchCheckController", LunchCheckController);

function LunchCheckController($scope, $filter) {

}