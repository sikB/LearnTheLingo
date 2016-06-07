var lingoApp = angular.module('lingoApp', ['ngRoute', 'ngCookies']);

lingoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "html/homePage.html",
        controller: 'lingoController'
    }).when('/register', {
        templateUrl: "html/register.html",
        controller: 'registerController'        
    }).when('/FAQ', {
        templateUrl: "html/FAQ.html",
        controller: 'faqController'
    }).when('/login', {
        templateUrl: "html/login.html",
        controller: 'loginController'
    }).when('/lessons', {
        templateUrl: "html/lessons.html",
        controller: 'lessonsController'
    }).when('/about', {
        templateUrl: "html/about.html",
        controller: 'aboutController'
    }).when('/contribute', {
        templateUrl: "html/contribute.html",
        controller: 'contributeController'
    }).otherwise({
		redirectTo: '/'
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



