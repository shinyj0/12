var slides = document.querySelectorAll("#sliders > img");
 
var a = 0;

showslide();

 
function showslide(){
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      a++;
      if (a>slides.length)
        a=1;
      slides[a-1].style.display = "block";
      setTimeout(showslide,3000);
    
}