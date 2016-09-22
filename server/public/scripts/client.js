var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html"
      }).
      when("/cat", {
        templateUrl: "/views/partials/cat.html"
      }).
      when("/lizard", {
        templateUrl: "/views/partials/lizard.html"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
