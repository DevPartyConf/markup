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
    "updateHash": true,
    "filter": ":not(.external)"
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

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        nextButton: '.swiper-button-prev',
        prevButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });     
});
// Ask organisators
$('a.header__title_h2').click(function (e) {
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

    if ($(window).width() > 483) {
        $('#sec-1').children(".block").each(function (index) {
            if (index < 6) {
                height += parseInt($(this).css('height')) + parseInt($(this).css('margin-top'));
            }
        });

        $('.spec-space').css('margin-top', (height + 1) + 'px');

        for (i = 1; i < 4; ++i) {
            var block = $('#sec-1').children(".block")[i + 5];

            if (parseInt($(block).children(".desc").css('height')) > parseInt($('.spec-' + i + ' .desc').css('height'))) {
                $('.spec-' + i).css('height', $(block).css('height'));
                $(block).css('height', 'auto');
            } else {
                $('.spec-' + i).css('height', 'auto');
                $(block).css('height', $('.spec-' + i).css('height'));
            }
        }

        var block_9 = $('#sec-1').children(".block")[9];
        var block_10 = $('#sec-1').children(".block")[10];
        var block_11 = $('#sec-1').children(".block")[11];

        $('.spec-4').css('height', (parseInt($(block_9).css('height')) + parseInt($(block_10).css('height')) / 2) + 'px');
        $('.spec-5').css('height', (parseInt($(block_10).css('height')) / 2 + parseInt($(block_11).css('height'))) + 'px');
    } else {
        $('.spec-space').css('margin-top', '0px');

        for (i = 1; i < 6; ++i)
            $('.spec-' + i).css('height', 'auto');
    }
}