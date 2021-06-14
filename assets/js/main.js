(function() // Code in a function to create an isolate scope
{
    var speed = 1000;
    var moving_frequency = 15; // Affects performance !
    var links = document.getElementsByTagName('a');
    var href;
    for(var i=0; i<links.length; i++)
    {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
        {
            links[i].onclick = function()
            {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if(element = document.getElementById(href.substr(1)))
                {
                    var hop_count = speed/moving_frequency
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    for(var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap*i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                        })();
                    }
                }

                return false;
            };
        }
    }

    var getScrollTopElement =  function (e)
    {
        var top = 0;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();




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








