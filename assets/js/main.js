/*scroll page
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());*/


$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        const th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you for your message!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});
$('.slick-slider').slick({
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1200, // - от какой ширины изменять настройки(1024 и ниже)
            settings: {
                // вносим изменения на ширине 1024 и ниже
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768, // брекпоинтов может быть сколько угодно
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    slidesToShow: 3 ,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
});

$(document).ready(function () {
    $('.header-navigation__btn').click(function () {
        $(this).toggleClass('header-navigation__btn--active ');
        $(".header__nav").toggleClass("header__nav--active");
    });
});

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

$(".button.rus_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var rusLang = document.getElementsByClassName("rus_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
        enLang[i].style.position = "static";
        rusLang[i].style.position = "absolute";
        rusLang[i].style.top = "-9999px";
        rusLang[i].style.left = "-9999px";
    }
});

$(".button.en_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var rusLang = document.getElementsByClassName("rus_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
        rusLang[i].style.position = "static";
        enLang[i].style.position = "absolute";
        enLang[i].style.top = "-9999px";
        enLang[i].style.left = "-9999px";
    }
});


$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});








