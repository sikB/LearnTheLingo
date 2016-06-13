var ukrainianApp = angular.module('ukrainianApp', ['ngRoute', 'ngCookies']);

ukrainianApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "ukrainianLessons.html",
        controller: 'lessonsController'
    }).when('/greetings', {
        templateUrl: "greetings.html",
        controller: 'lessonsController'        
    }).when('/introductions', {
        templateUrl: "introductions.html",
        controller: 'lessonsController'
    }).when('/numbers', {
        templateUrl: "numbers.html",
        controller: 'lessonsController'
    }).when('/colors', {
        templateUrl: "colors.html",
        controller: 'lessonsController'
    }).when('/days', {
        templateUrl: "days.html",
        controller: 'lessonsController'
    }).when('/ordering', {
        templateUrl: "ordering.html",
        controller: 'lessonsController'
    }).when('/navigation', {
        templateUrl: "navigation.html",
        controller: 'lessonsController'
    }).when('/bar', {
        templateUrl: "bar.html",
        controller: 'lessonsController'
    }).when('/jokes', {
        templateUrl: "jokes.html",
        controller: 'lessonsController'
    }).otherwise({
        redirectTo: '/ukrainianLessons.html'
    })
});

ukrainianApp.controller('lessonsController', function($scope, $http, $location, $cookies){

});