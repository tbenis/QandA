app.controller('userController', ["$scope", "userFactory", "$location", function($scope, userFactory, $location){

    $scope.user = {};

    $scope.login = function() {
        if (!$scope.user.name) {
            alert("Please enter UserName!");
        } else {
            userFactory.login($scope.user, function(returnedData){
                $scope.user = {};
                $location.url("/dashboard");
            });
        }
    };
}]);
