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

ukrainianApp.controller('lessonsController', function($scope, $http, $location, $cookies){
  makeNoise = function(){
    document.getElementById('peaks-audio').play();
  }
   makeNoise1 = function(){
    document.getElementById('peaks-audio1').play();
  }
  makeNoise2 = function(){
    document.getElementById('peaks-audio2').play();
  }
  makeNoise3 = function(){
    document.getElementById('peaks-audio3').play();
  }
  makeNoise4 = function(){
    document.getElementById('peaks-audio4').play();
  }
  makeNoise5 = function(){
    document.getElementById('peaks-audio5').play();
  }
  makeNoise6 = function(){
    document.getElementById('peaks-audio6').play();
  }
  makeNoise7 = function(){
    document.getElementById('peaks-audio7').play();
  }
  makeNoise8 = function(){
    document.getElementById('peaks-audio8').play();
  }
  makeNoise9 = function(){
    document.getElementById('peaks-audio9').play();
  }
  makeNoise10 = function(){
    document.getElementById('peaks-audio10').play();
  }
  makeNoise11 = function(){
    document.getElementById('peaks-audio11').play();
  }
  makeNoise12 = function(){
    document.getElementById('peaks-audio12').play();
  }
  makeNoise13 = function(){
    document.getElementById('peaks-audio13').play();
  }
  makeNoise14 = function(){
    document.getElementById('peaks-audio14').play();
  }
  makeNoise15 = function(){
    document.getElementById('peaks-audio15').play();
  }
  makeNoise16 = function(){
    document.getElementById('peaks-audio16').play();
  }
  makeNoise17 = function(){
    document.getElementById('peaks-audio17').play();
  }
  makeNoise18 = function(){
    document.getElementById('peaks-audio18').play();
  }
  makeNoise19 = function(){
    document.getElementById('peaks-audio19').play();
  }
  makeNoise20 = function(){
    document.getElementById('peaks-audio20').play();
  }
  makeNoise21 = function(){
    document.getElementById('peaks-audio21').play();
  }
  makeNoise22 = function(){
    document.getElementById('peaks-audio22').play();
  }
  makeNoise23 = function(){
    document.getElementById('peaks-audio23').play();
  }
  makeNoise24 = function(){
    document.getElementById('peaks-audio24').play();
  }
  makeNoise25 = function(){
    document.getElementById('peaks-audio25').play();
  }
  makeNoise26 = function(){
    document.getElementById('peaks-audio26').play();
  }
  makeNoise27 = function(){
    document.getElementById('peaks-audio27').play();
  }
  makeNoise28 = function(){
    document.getElementById('peaks-audio28').play();
  }

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

