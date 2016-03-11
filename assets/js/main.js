// Sticky header
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.head').addClass("sticky");
        $('header').addClass("p-top");
    }
    else {
        $('.head').removeClass("sticky");
        $('header').removeClass("p-top");
    }
});
// Single nav function
$("nav ul").singlePageNav({
    "offset": 30,
    "updateHash": true
});
// Pop-up form funciton
$('.form-box__close').click(function () {
    $(this).closest('.col-lg-12').find('.form-box_white').removeClass('active fadeInUp animated');
    $(this).closest('.col-lg-12').find('.review').removeClass('hidden')
});
$('.container .review').click(function () {
    $(this).closest('.col-lg-12').find('.review').addClass('hidden');
    $(this).closest('.col-lg-12').find('.form-box_white').addClass('active fadeInUp animated');
    return false;
});
// Toggle menu funciton 
$('.toggle-menu').click(function () {
    $('.toggle-menu__sandwitch').toggleClass('active');
    $('header').toggleClass('active');
});

$(document).ready(function () {
    $('#responsive').lightSlider({
        item: 4,
        auto: true,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        verticalHeight: 900,
        controls: false,
        currentPagerPosition: 'middle',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});