$(document).ready(function () {


    let $btns = $('.button-group button');


    $btns.click(function (e) {

        $('.button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.button-group #btn1').trigger('click');

    $('.grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    //sticky navigation menu

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    navbarFixed();

    // dark theme mode

    let icon=document.getElementById("icon");
    icon.onclick= function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src ="./img/dark theme icons/sun.png";
        }else{
            icon.src ="./img/dark theme icons/moon.png";
        }
    }



});