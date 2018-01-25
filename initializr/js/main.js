var activateSlide = function (s) {
console.log(s);
    $(".myImg").removeClass("active");
    $(".myImg[slide='" + s + "']").addClass("active");

    $(".sliderButton li").removeClass("active");
    $(".sliderButton li[slide='" + s + "']").addClass("active");

    $(".header4").removeClass("active");
    $(".header4[slide='" + s + "']").addClass("active");

    $(".middleSection").removeClass("black").removeClass("red").removeClass("green");

        if( s == 1){
            $(".middleSection").addClass("black");

        }
        else if( s == 2){
            $(".middleSection").addClass("green");

        }else {
            $(".middleSection").addClass("red");
        }
};

$(".sliderButton li").click(function () {


    activateSlide($(this).attr("slide"));

});

$(document).ready(function () {
    activateSlide(1);
});


//Task_14: Links prevent changing the page
$("a").click(function (event) {
    event.preventDefault();
    $(this).attr('href', "https://www.facebook.com");
    var lnk = $(this).attr('href');
    alert(lnk);
});

//Task_15;
$("[type='submit']").click(function (e) {
    e.preventDefault();
    var d = new Date();
    var n = d.getDate();

    var obiect = {
        custom: {
            data: n,
            local_url: window.location.href
        }
    };

    $(this).parent().children().each(function (i, v) {
        if ($(v).hasClass("message")) {
            obiect[$(v).attr('name')] = $(v).val();

        }
    });

    console.log(obiect);
});

