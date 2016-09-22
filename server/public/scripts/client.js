var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/cat", {
        templateUrl: "/views/partials/cat.html",
        controller: "catController"
      }).
      when("/lizard", {
        templateUrl: "/views/partials/lizard.html",
        controller: "lizardController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
