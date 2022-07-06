$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.top_btn').fadeIn(250);
        }
        else {
            $('.top_btn').fadeOut(250);

        }
    });
    $('.top_btn').click(function () {
        $('html , body').animate(
            {
                scrollTop: 0
            }, 400
        );
    });
});