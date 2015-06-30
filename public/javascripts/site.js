angular.module('learnExpress', [])

.controller('expressController', function($scope, $http){
    $scope.page_title = 'Users list';
    $scope.users = {};

    $http.get('/users')
        .then(function(data){
            $scope.users = data.data;
        })
        .catch(function(err){
            console.log(err);
        });
})
