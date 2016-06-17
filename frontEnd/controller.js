var lingoApp = angular.module('lingoApp', ['ngRoute', 'ngCookies']);

lingoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "homePage.html",
        controller: 'lingoController'
    }).when('/register', {
        templateUrl: "register.php",
        controller: 'registerController'        
    }).when('/FAQ', {
        templateUrl: "FAQ.html",
        controller: 'faqController'
    }).when('/login', {
        templateUrl: "login.html",
        controller: 'loginController'
    }).when('/ukrainian', {
        templateUrl: "ukrainianLessons.html",
        controller: 'lessonsController'
    }).when('/languages', {
        templateUrl: "languages.html",
        controller: 'languagesController'
    }).when('/about', {
        templateUrl: "about.html",
        controller: 'aboutController'
    }).when('/forum', {
        templateUrl: "forum.html",
        controller: 'forumController'
    }).when('/contact', {
        templateUrl: "contact.html",
        controller: 'contactController'
    }).when('/contribute', {
        templateUrl: "contribute.html",
        controller: 'contributeController'
    }).otherwise({
        redirectTo: '/ukrainianLessons.html'
    })
});

lingoApp.controller('lingoController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('languagesController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('registerController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('faqController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('loginController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('aboutController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('contributeController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('contactController', function($scope, $http, $location, $cookies){

});

lingoApp.controller('forumController', function($scope, $http, $location, $cookies){

});



