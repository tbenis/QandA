/*idQuestionController */ 
app.controller('idQuestionController', ["$scope", "userFactory", "$location", "questionFactory", "$routeParams", "answerFactory", function($scope, userFactory, $location, questionFactory, $routeParams, answerFactory){

    $scope.cur_user = null;
    $scope.answers = [];

    var getAnswers = function() {
        answerFactory.getAnswers($routeParams, function(returnedData){
            $scope.answers = returnedData;
            console.log('theAAAA',  returnedData)
        });
    };
    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    questionFactory.getCurQuestion($routeParams, function(returnedData){
        $scope.question = returnedData;
          console.log('cur_quest',returnedData)
        getAnswers();
        console.log('The Answers',getAnswers())
    });

    $scope.like = function(index){
        $scope.liked = $scope.answers[index];
        answerFactory.like($scope.liked, function(returnedData){
            getAnswers();
        });
    };

}]);
/*questionController */
app.controller('questionController', ["$scope", "userFactory", "$location", "questionFactory", function($scope, userFactory, $location, questionFactory){

    $scope.cur_user = null;

    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    $scope.cancel = function() {
        $scope.question = {};
    };

    $scope.addQuestion = function() {

        if (!$scope.question) {
            alert("Question cannot be blank!");
        } else {
            questionFactory.addQuestion($scope.question, function(returnedData){
                if (returnedData.errors) {
                    $scope.errors = returnedData.errors;
                } else {
                    $location.url("/dashboard");
                }
            });
        }
    };

}]);
