app.controller('answerController', ["$scope", "userFactory", "$location", "questionFactory", "$routeParams", "answerFactory", function($scope, userFactory, $location, questionFactory, $routeParams, answerFactory){

    $scope.cur_user = null;

    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    questionFactory.getCurQuestion($routeParams, function(returnedData){
        $scope.question = returnedData;
    });

    $scope.cancel = function() {
        $scope.answer = {};
    };

    $scope.answerQuestion = function() {
        if (!$scope.answer) {
            alert("Please enter an answer!");
        } else {
            $scope.answer.question = $scope.question;
            answerFactory.answerQuestion($scope.answer, function(returnedData){
                if (returnedData.errors) {
                    $scope.errors = returnedData.errors;
                } else {
                    $location.url("/dashboard");
                }
            });
        }
    };

}]);
