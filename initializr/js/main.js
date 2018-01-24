


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-white";
}

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');

var modalImg = document.getElementById("img01");
var modalImg1 = document.getElementById("img02");
var modalImg2 = document.getElementById("img03");

img.onclick = function(){
    modal.style.display = "block";

    modalImg.src = this.src;
    $(".middleSection").css("background-color","yellow");



}
img1.onclick = function () {
    modal.style.display = "block";
    modalImg1.src = this.src;
    $(".middleSection").css("background-color","green");

}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg2.src = this.src;
    $(".middleSection").css("background-color","red ");

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $("body").animate({
        opacity: '1.0',
    })
}