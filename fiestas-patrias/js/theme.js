/*
Theme Name: Yoox
Theme URI: http://layerdrops.com/
Author: Layerdrops
Author URI: http://layerdrops.com/
Description: Yoox - Fine One Page Parallax HTML5 Responsive Template
Version: 1.0
License:
License URI:
*/

/*=======================================================================
[Table of contents]
=========================================================================

1. Revolution Slider 01
2. Revolution Slider 02
3. Revolution Slider 03
4. Revolution Slider 04
5. Testimonial Carousel
6. Fun Fact Count
7. Team Member Skills
8. Clinet Slider
9. Google Map
10. Parallax BG
11. Video PopUp
12. Menu PopUp 
13. Search PopUp 
14. Mobile Menu
15. Bact To Top Button
16. Header Fixed
17. Active Menu Scroll 
18. Right Side Fixed Menu
19. Menu Scroll Function
20. Portfolio Popup
21.Color Preset
22. Preloder
23. Contact From Submit

*/

(function ($) {
    'use strict';

    /*--------------------------------------------------------
    / 1. Revolution Slider 01
    ----------------------------------------------------------*/
    
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "left",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42
            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_1 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 2. Revolution Slider 02
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "right",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_2 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 3. Revolution Slider 03
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "right",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_3 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 4. Revolution Slider 04
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_4').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 300],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "left",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_4 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 5. Testimonial Carousel
     ----------------------------------------------------------*/

    $('.testimonial_carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false
    });

    /*--------------------------------------------------------
    / 6. Fun Fact Count
     ----------------------------------------------------------*/
    var skl = true;
    $('.singlefunfact').appear();
    $('.singlefunfact').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*--------------------------------------------------------
    / 7. Team Member Skills
    /----------------------------------------------------------*/

    if ($(".teamSkills").length > 0)
    {
        $('.teamSkills').appear();
        $('.teamSkills').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-limit");
            $(".skill", this).animate({'width': datacount + '%'}, 4000);
            $(".rounds", this).animate({'left': datacount + '%'}, 4000);
            if (coun)
            {
                $(this).find('.parcent').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }

    /*--------------------------------------------------------
    / 8. Clinet Slider
    /----------------------------------------------------------*/

    $('.client_slider').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    /*--------------------------------------------------------
    / 9. Google Map
    /----------------------------------------------------------*/

    if ($('#gmap').length > 0) {
        var contact_map
        contact_map = new GMaps({
            el: '#gmap',
            lat: 18.921726 ,
            lng:-97.766936,
            scrollwheel: false,
            zoom: 11,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        contact_map.addMarker({
            lat: 18.921726,
            lng: -97.766936,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP
        });
        
        var styles = [
            {
                "featureType" : "road",
                "stylers" : [
                    {"color" : "#ffffff"}
                ]
            }, {
                "featureType" : "water",
                "stylers" : [
                    {"color" : "#ecedf1"}
                ]
            }, {
                "featureType" : "landscape",
                "stylers" : [
                    {"color" : "#f7f8fc"}
                ]
            }, {
                "elementType" : "labels.text.fill",
                "stylers" : [
                    {"color" : "transparent"}
                ]
            }, {
                "featureType" : "poi",
                "stylers" : [
                    {"color" : "#e4e5e9"}
                ]
            }, {
                "elementType" : "labels.text",
                "stylers" : [
                    {"saturation" : 1},
                    {"weight" : 0.1},
                    {"color" : "#737980"}
                ]
            }

        ];
        contact_map.addStyle({
            styledMapName : "Styled Map",
            styles : styles,
            mapTypeId : "map_style"
        });

        contact_map.setStyle("map_style");
    }

    /*--------------------------------------------------------
    / 10. Parallax BG
    /----------------------------------------------------------*/
    $(document).ready(function () {
        var per1 = $('.perelaxBg1'),
                per2 = $('.perelaxBg2'),
                per3 = $('.perelaxBg3');
        if (per1.length > 0) {
            per1.parallax("0", 0.2);
        }
        if (per2.length > 0) {
            per2.parallax("0", 0.2);
        }
        if (per3.length > 0) {
            per3.parallax("0", 0.2);
        }
    });

    /*--------------------------------------------------------
    / 11. Video PopUp
    /----------------------------------------------------------*/
    $('.video_link').magnificPopup({
        type: 'iframe'
    });

    /*--------------------------------------------------------
    / 12. Menu PopUp 
    /----------------------------------------------------------*/

    $(document).ready(function () {

        $("#close-popup").on('click', function (e) {
            e.preventDefault();
            $("body").removeClass("menu__open show-overlay-nav")
        })
        $(".hamburger").on("click", function () {
            $(this).toggleClass("is_active"), $("body").toggleClass("menu__open")
        }), $(document).keyup(function (e) {
            27 === e.keyCode && $(".menu__open .hamburger").click()
        }), $("#open-overlay-nav").on("click", function () {
            $("body").toggleClass("show-overlay-nav")
        }), $(".dl-menu__wrap").dlmenu({
            animationClasses: {
                classin: "dl-animate-in-3",
                classout: "dl-animate-out-3"
            }
        });


        var r = $(".top:not(.navbar-fixed)");
        $(".top").affix({
            offset: {
                top: 1
            }
        }), $(".top").on("affix.bs.affix", function () {
            r.hasClass("affix") || r.addClass("animated slideInDown")
        }), $(".top").on("affix-top.bs.affix", function () {
            r.removeClass("animated slideInDown")
        }), $('.navbar-nav li a[href="#"]').on("click", function () {
            return $(this).closest("li").toggleClass("current"), $(this).closest("li").children("ul").slideToggle(400), !1
        }), $(".filter-categories__item").on("click", function () {
            $(this).addClass("filter-categories__item_current"), $(this).siblings().removeClass("filter-categories__item_current")
        }), $("#open-popup").on("click", function () {
            $("body").toggleClass("show-popup")
        }), $("#close-popup").on("click", function () {
            $("body").removeClass("show-popup")
        }), $(document).keyup(function (e) {
            27 === e.keyCode && $("#close-popup").click()
        })

    });

    /*--------------------------------------------------------
    / 13. Search PopUp 
    /----------------------------------------------------------*/

    $('.searchToggler').on('click', function (e) {
        e.preventDefault();
        $('.searchFixed').fadeToggle();
    });
    var search_form = $(".searchFixed");
    $(document).on('mouseup', function (e) {
        var container = search_form;

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $('.searchFixed').fadeOut();
        }

    });

    /*--------------------------------------------------------
    / 14. Mobile Menu
    /----------------------------------------------------------*/

    if ($('.mobilemenu').length > 0) {
        $('.mobilemenu').on('click', function () {
            var w = $(window).width();
            $(this).toggleClass('active');
            $('.mainMenu > ul').slideToggle('slow');
        });
        if ($(window).width() < 768)
        {
            $('.mainMenu > ul li.menu-item-has-children > a').on('click', function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
            });
        }
    }

    /*--------------------------------------------------------
    / 15. Bact To Top Button
    /----------------------------------------------------------*/

    var back = $("#backToTop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        var h = $(window).height() / 2;
        if ($(window).scrollTop() > h)
        {
            back.addClass('showit');
        } else
        {
            back.removeClass('showit');
        }

    });
    body.on("click", "#backToTop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
    });

    /*--------------------------------------------------------
    / 16. Header Fixed
    /----------------------------------------------------------*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $(".headerFix").addClass('fixedHeader animated fadeInDown');
        } else
        {
            $(".headerFix").removeClass('fixedHeader animated fadeInDown');
        }
        scroll_topmenu();
        scroll_popupmenu();
        scroll_sidemenu();

    });

    /*--------------------------------------------------------
    / 17. Active Menu Scroll 
    /----------------------------------------------------------*/
    $('.mainMenu ul li.scroll > a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo');
        return false;
    });
    $('.dl-menu__wrap ul li.scroll > a').on('click', function () {

        if (!$(this).parent().hasClass('menu-item-has-children'))
        {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo', function () {
                $("body").removeClass("menu__open show-overlay-nav");
            });
            return false;
        } else {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo');
        }
    });
    
     /*--------------------------------------------------------
     / 18. Right Side Fixed Menu
     /----------------------------------------------------------*/
     $('.fixednavHeader ul li.scroll > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top + 10}, 1000);
        return false;
     });

    /*--------------------------------------------------------
    / 19. Menu Scroll Function
    /----------------------------------------------------------*/
    function scroll_topmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.mainMenu li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    function scroll_popupmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.dl-menu__wrap').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.dl-menu__wrap li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    function scroll_sidemenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.fixednavHeader').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.fixednavHeader li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }

    /*--------------------------------------------------------
    / 20. Portfolio Popup
    /----------------------------------------------------------*/

    $('.popupEnabler').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var files = $this.attr('href');

        $('.portfolioPopUp').addClass('bounceInDown').fadeIn('fast', function () {
            $('body').addClass('hiddenOverflow');
            setTimeout(function () {
                $("#popupContentHolder").load("ajax/folio_01.html", function () {
                    $('.folio_slider').owlCarousel({
                        loop: true,
                        margin: 0,
                        responsiveClass: true,
                        items: 1,
                        dots: false,
                        nav: true,
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                    });
                });
            }, 3000);
        });

    });
    $('.portfolioPopUp').on('click', '.closePopUp', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.portfolioPopUp').removeClass('bounceInDown').fadeOut('slow', function () {
            $('body').removeClass('hiddenOverflow');
            $("#popupContentHolder").html('<div class="folioLoader text-center"><span class="let1">l</span><span class="let2">o</span><span class="let3">a</span><span class="let4">d</span><span class="let5">i</span><span class="let6">n</span><span class="let7">g</span></div>');
        });
    });
    
    /*--------------------------------------------------------
    / 21. Color Preset
    /----------------------------------------------------------*/
    
    if($(".color_settings").length > 0)
    {
        var switchs = true;
        $(".switch-btn").on('click', function(e){
            e.preventDefault();
            if(switchs)
            {
                $(this).addClass('active');
                $(".color_settings").animate({'left' : '0px'}, 400);
                switchs = false;
            }else
            {
                $(this).removeClass('active');
                $(".color_settings").animate({'left' : '-240px'}, 400);
                switchs = true;
            }
        });
        $(".color_preset button").on('click', function(e){
            e.preventDefault();
            var color = $(this).attr('id');
            $(".color_preset button").removeClass('active');
            $(this).addClass('active');
            $("#colorChange").attr('href', 'css/presets/' + color + '.css');
        });
    }
    ;
    
    /*--------------------------------------------------------
    / 22. Preloder
    /----------------------------------------------------------*/
    
    $(window).load(function(){
        var preload = $('.preloader');
        if(preload.length > 0){
            preload.delay(800).fadeOut('slow');
        }
    });
   
    /*--------------------------------------------------------
    / 23. Contact From Submit
    /----------------------------------------------------------*/
    
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var f_name = $("#f_name").val();
            var l_name = $("#l_name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var message = $("#con_message").val();

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'ajax/mail.php',
                    data: {f_name: f_name, l_name: l_name, email: email, phone: phone, message: message},
                    success: function(data)
                    {
                        //alert(data);
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                        setTimeout(function() {
                            $("#con_submit").html('Send Message');
                        }, 2500);
                    }
                });
            }
            else
            {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }

})(jQuery);