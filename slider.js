var slide = new Array("images/slide1.png", "images/slide2.png", "images/slide3.png");
var numero = 0;
setInterval("ChangeSlide(1)", 4000);
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}