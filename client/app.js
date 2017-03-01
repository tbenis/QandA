app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html',

  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',

  })
  .when('/addQuestion', {
    templateUrl: 'partials/addQuestion.html',

  })
  .when('/question/:id/answer', {
    templateUrl: 'partials/addAnswer.html',

  })
  .when('/question/:id', {
    templateUrl: 'partials/QandA.html',

  })
  .otherwise('/login', {
    templateUrl: 'partials/login.html',
  })
})
