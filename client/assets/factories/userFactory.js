
app.factory('userFactory', ['$http', function($http) {
        var factory ={}

        factory.login = function(user, callback) {
          console.log('ha')
            $http.post("/login", user).then(function(err, returned_data){
              if(err){console.log('Error::', err)}
                callback(returned_data);
            });
        };

        factory.getCurUser = function(callback){
            $http.get('/index').then(function(returned_data) {
                callback(returned_data.data);
            });
        };

        return factory

}]);
