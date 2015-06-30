var app = angular.module('learnExpress', []);

app.controller('expressController', ['$scope', function($scope){
    $scope.hello = 'Hello world';
}]);
