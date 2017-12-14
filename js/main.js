/*To trigger adding and removing of responsive class to navi when the user
clicks on the icon*/
function fun() {
    var i = document.getElementById("mynavi");
    if(i.className == "navi")
    {
        i.className += " responsive";
    } else 
    {
        i.className = "navi";
    }
}
/*Countdown */
var exptDate = new Date("October 15, 2018 00:01:01").getTime();
var now = new Date().getTime();
var rem = exptDate - now;
var days = Math.floor(rem/(1000*60*60*24));
//document.getElementById("i2").innerHTML=days+ " Days Left For Durga Puja 2018";

/*Copyright year auto-update*/
var d = new Date();
var d1 = d.getFullYear();

/*Year Calculation*/
var d2 = 1949; //Estd date
document.getElementById("anni").innerHTML="This year is our "+(d1-d2)+"th Anniversary";

/*slideshow*/
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
