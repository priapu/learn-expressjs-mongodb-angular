angular.module('learnExpress', [])

.controller('expressController', function($scope, $http){
    $scope.page_title = 'Users list';
    $scope.users = {};

    $scope.getUsers = function(){
        $http.get('/users')
            .then(function(data){
                $scope.users = data.data;
            })
            .catch(function(err){
                console.log(err);
            });
    };

    $scope.addUser = function(input) {
        $http.post('/users', input)
            .then(function(data){
                console.log(data.data.message);
                $scope.getUsers();
                $scope.input = {};
            });
    };

    // Init

    $scope.getUsers();
})
