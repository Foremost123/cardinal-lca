$(window).scroll(function () {
    $('.animation-test1').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideRight1");
        } else {
            $(this).removeClass("slideRight1");
        }
    });
});
$(window).scroll(function () {
    $('.animation-test2').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideRight2");
        } else {
            $(this).removeClass("slideRight2");
        }
    });
});
$(window).scroll(function () {
    $('.animation-test3').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideRight3");
        } else {
            $(this).removeClass("slideRight3");
        }
    });
});
