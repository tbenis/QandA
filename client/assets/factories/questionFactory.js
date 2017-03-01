app.factory('questionFactory', ['$http', function($http) {

        var factory = {}

        factory.addQuestion = function(question, callback) {

            $http.post("/questions", question).then(function(returned_data){
                callback(returned_data.data);
            });
        };

        factory.getQuestions = function(callback) {
            $http.get("/questions").then(function(returned_data){
                callback(returned_data.data);
            });
        };

        factory.getCurQuestion = function(id, callback) {
          console.log('iddddd', id.id)
            $http.get("/questions/" + id.id).then(function(returned_data){
              console.log('from get curr fact',returned_data.data);
                callback(returned_data.data);
            });
        };
  return factory
}]);
