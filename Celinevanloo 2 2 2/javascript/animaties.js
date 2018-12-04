/* jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/*
Micro interactie van het duimpje
Wanneer je klikt op het duimpje gebeurt de aangegeven functie en komt er Hello in de console log te staan, deze staat in het CSS bestand
*/

//var bookmarkAnimationOne = function () {
//
//    var bookmarkOne = document.querySelectorAll('#bookmark'); //variabele aangemaakt
//
//
//	bookmarkOne.classList.add('bookmarkone-active');  //class in css waar animatie instaat
//    console.log("Hoi");
//} ;
//
//bookmarkOne.addEventListener("mouseover", bookmarkAnimationOne);

//function bookmark({
//    var Test = document.getElementById('bookmark');
//    Test.classList.add('bookmarkone-active');
//    console.log("Hoi"); ;
//});

var logo = document.getElementById("logo");

logo.addEventListener("mouseover", shakeanimation);

function shakeanimation() {
    this.classList.add("shake");

		setTimeout( function() {
		  book.classList.remove("shake");
		}, 2000);
}

var heart = document.querySelector(".heart");


heart.addEventListener("click", function() {

    var imgReplace = document.querySelector(".heart").classList;

    if (imgReplace.contains("heartbeat")) {

        imgReplace.remove("heartbeat");
        imgReplace.add("heartbeat-reverse");

        document.querySelector(".heart").src = "./img/heart-shape.png";

    } else {
        imgReplace.remove("heartbeat-reverse");
        imgReplace.add("heartbeat");

        document.querySelector(".heart").src = "./img/favoriteicon.png";
    }

});
var button = document.getElementById("bookmark");
var nav = document.querySelector(".nav__group");

button.addEventListener("click",function(){
  if (nav.classList.contains("active__search")) {
    nav.classList.remove("active__search");
    nav.classList.add("closed");
  }
  else {
    nav.classList.remove("closed");
    nav.classList.add("active__search");
  }
});
