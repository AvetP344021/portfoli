let btn = document.querySelector("navbtn");
// Function to get the Y position of an element
let logo = document.querySelector(".logo");


var yPosition1 = 1200
var yPosition2 = 2100
var yPosition3 = 3400
var yPosition4 = 6400
function scrollToY(yPosition) {
  window.scrollTo({
    top: yPosition,
    behavior: 'smooth' 
  });
}


function logostop(){
  if (window.scrollY >= 10){
    logo.style.position = "fixed";
    logo.style.top = "0";
    logo.style.zIndex = "1030";
    console.log("yes")
  } else {
    console.log("no")
    console.log(window.scrollY)
  }
}
logostop()