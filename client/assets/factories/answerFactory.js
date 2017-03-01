app.factory('answerFactory', ['$http', function($http) {
        var factory = {};

        factory.answerQuestion = function(answer, callback) {
            $http.post("/answers", answer).then(function(returned_data){
                callback(returned_data.data);
            });
        };

        factory.getAnswers = function(id, callback) {
            $http.get("/answers/" + id.id).then(function(returned_data) {
                callback(returned_data.data);
            });
        };

        factory.like = function(liked, callback) {
            $http.post("/answers/like", liked).then(function(returned_data){
                callback(returned_data.data);
            });
        };
    return factory

}]);
