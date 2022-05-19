var slide= document.getElementById("slide-img");
var slideimg=document.getElementById("slide-img").src;

$(document).ready(function(){
  $(".toggle").click(function(){
    $("aside").toggleClass("close")
  });
 });

// click outside
$(document).mouseup(function(e){ 
  var container = $("aside");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
         $("aside").removeClass("close")
    }
});

var login = document.getElementsByClassName('glow-on-hover');

login.add

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

