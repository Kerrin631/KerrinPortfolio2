var myAppModule = angular.module('myPortfolio', ['ngRoute']);

//  use the config method to set up routing:
    myAppModule.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl: 'partials/home.html'
        })
        .when('/about',{
          templateUrl: 'partials/about.html'
        })
        .when('/resume',{
          templateUrl: 'partials/resume.html'
        })
        .when('/contact',{
          templateUrl: 'partials/contact.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });