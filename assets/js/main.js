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
// Speakers slider
$(document).ready(function () {
    $('#responsive').lightSlider({
        item: 4,
        auto: false,
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
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});
// Registration button
$('.header__title_button').click(function (e) {
    $(window).scrollTo('#registration', 600, {
        offset: {
            top: -30
        }
    });
    e.preventDefault();
});
// Ask organisators
$('.ask, a.header__title_h2').click(function (e) {
    $(window).scrollTo('#contacts', 600, {
        offset: {
            top: -30
        }
    });
    e.preventDefault();
});
// Submit talk
$('.speak').click(function (e) {

    var review = $('.container .review');

    review.closest('.col-lg-12').find('.review').addClass('hidden');
    review.closest('.col-lg-12').find('.form-box_white').addClass('active');

    $.scrollTo('#speaker-form', 600, {
        offset: {
            top: -100
        }
    });

    e.preventDefault();
});
// Scroll top
$('.logo').click(function (e) {
    $.scrollTo('#index', 600);
    e.preventDefault();
});
// Adoptive schedule
$(function(){
    resizeProgram();
});

$(window).resize(resizeProgram);

function resizeProgram() {
    var height = 0;

    if ($(window).width() > 400) {
        $('#sec-1').children(".block").each(function (index) {
            if (index < 6)
                height += parseInt($(this).css('height')) + parseInt($(this).css('margin-top'));
        });
        $('.spec-space').css('margin-top', (height + 1) + 'px');

        var block_6 = $('#sec-1').children(".block")[6];
        var block_7 = $('#sec-1').children(".block")[7];
        var block_8 = $('#sec-1').children(".block")[8];
        var block_9 = $('#sec-1').children(".block")[9];
        var block_10 = $('#sec-1').children(".block")[10];
        var block_11 = $('#sec-1').children(".block")[11];

        $('.spec-1').css({'height': $(block_6).css('height'), 'padding': '0px'});
        $('.spec-1 .desc').css('padding', '0 3%');
        $('.spec-2').css('height', $(block_7).css('height'));
        $('.spec-3').css('height', $(block_8).css('height'));
        $('.spec-4').css('height', (parseInt($(block_9).css('height')) + parseInt($(block_10).css('height')) / 2) + 'px');
        $('.spec-5').css('height', (parseInt($(block_10).css('height')) / 2 + parseInt($(block_11).css('height'))) + 'px');
    } else {
        $('.spec-space').css('margin-top', '0px');
        $('.spec-1').css('height', 'auto');
        $('.spec-2').css('height', 'auto');
        $('.spec-3').css('height', 'auto');
        $('.spec-4').css('height', 'auto');
        $('.spec-5').css('height', 'auto');
    }
}