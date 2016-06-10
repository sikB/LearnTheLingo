var lingoApp = angular.module('lingoApp', ['ngRoute', 'ngCookies']);


lingoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "homePage.html",
        controller: 'lingoController'
    }).when('/register', {
        templateUrl: "register.html",
        controller: 'registerController'        
    }).when('/FAQ', {
        templateUrl: "FAQ.html",
        controller: 'faqController'
    }).when('/login', {
        templateUrl: "login.html",
        controller: 'loginController'
    }).when('/lessons', {
        templateUrl: "lessons.html",
        controller: 'lessonsController'
    }).when('/about', {
        templateUrl: "about.html",
        controller: 'aboutController'
    }).when('/contribute', {
        templateUrl: "contribute.html",
        controller: 'contributeController'
    }).otherwise({
        redirectTo: '/homePage.html'
    })
});

lingoApp.controller('lingoController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('registerController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('faqController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('loginController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('lessonsController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('aboutController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('contributeController', function($scope, $http, $location, $cookies){

});



