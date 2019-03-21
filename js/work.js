$(document).ready(function () {
    $(window).on("scroll", function () {
        var st = $(window).scrollTop();
        if (st > 590) {
            $(".box1-grandfather .box1-chiled").addClass("fadeInUp");
        }
        if (st > 1340) {
            $(".appetisers").addClass("fadeInLeft");
            $(".starters").addClass("fadeInRight");
        }
        if (st > 1676) {
            $(".salads").addClass("fadeInLeft");
            $(".main-dishes").addClass("fadeInRight");
        }
        if (st > 2344) {
            $(".box2-grandfather .box2-baby").addClass("fadeInUp");
        }
    });
});