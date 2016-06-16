var ukrainianApp = angular.module('ukrainianApp', ['ngRoute', 'ngCookies', 'ngAudio']);

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
    }).when('/greetingsMG', {
        templateUrl: "greetingsMG.html",
        controller: 'greetingsMGController'
    }).when('/jokes', {
        templateUrl: "jokes.html",
        controller: 'lessonsController'
    }).otherwise({
        redirectTo: '/ukrainianLessons.html'
    })
});

ukrainianApp.controller('lessonsController', function($scope, $http, $location, $cookies, ngAudio){
  
});

ukrainianApp.controller('greetingsMGController', function($scope, $http, $location, $cookies){
    var imagesUkr = [];
    var imagesUS = [];

// get images, place them in an array & randomize the order
for (var i = 1; i <= 9; i++) { 
  // var rand = Math.floor(Math.random() * (10)); 
  // console.log(rand);
  var img = 'img/' + i + '.png';
  var img2 = 'img2/' + i + '.png';
  imagesUkr.push(img);
  imagesUS.push(img2);
}
// randomizeImages();

// console.log('---------------------');
// console.log(imagesUkr);
// console.log(imagesUS);
// console.log('---------------------');

// output images then hide them
var output = "<ol>"; 
for (i = 1; i <=16; i++) { 
    output += "<li class=memGame>";
  if(i<9){
    // console.log(i);
    output += "<img src = '" + imagesUkr[i] + "'" + "card='card" + i + "'>";
    }
    else{
      var j = i-8;
      // console.log(j);
        output += "<img src = '" + imagesUS[j] + "'" + "card='card" + j + "'>";
    }

    output += "</li>";
  }
// console.log('---------------------');
//   console.log(imagesUkr);
//   console.log(imagesUS);
// console.log('---------------------');

output += "</ol>";
document.getElementById("container").innerHTML = output;
$("img").hide();

var guess1 = "";
var guess2 = "";
var count = 0;

$("li").click(function() {
  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {
    
    // increment guess count, show image, mark it as face up
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");
    
    //guess #1
    if (count === 1 ) { 
      // console.log($(this).children("img").attr('card'));
      guess1 = $(this).children("img").attr("card");     
    }   
    
    //guess #2
    else { 
      // console.log($(this).children("img").attr("card"));
      guess2 = $(this).children("img").attr("card"); 
      // console.log(guess2);
      // since it's the 2nd guess check for match
      if (guess1 === guess2) { 
      console.log(guess1);
        console.log("match");
        $("li").children("img[card='" + guess2 + "']").addClass("match");
              } 
      
      // else it's a miss
      else { 
        console.log("miss");
        setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("face-up");
        }, 1000);
      }
    
      // reset
      count = 0; }
      // setTimeout(function() { console.clear(); }, 60000);      
    }
  });

// // randomize array of images
function randomizeImages(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  
  imagesUkr.randomize();
  imagesUS.randomize();
}
});

