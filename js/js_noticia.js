
$(function () {
    $('.navbar-nav > li > a').css('line-height', '75px');
    if (window.matchMedia('(max-width: 976px)').matches) {
        $('#publiver').attr('src', 'img/publi_vert.jpg');
    };
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#publiver').attr('src', 'img/publi_vert2.png');
    };
});
$(window).resize(function () {
    if (window.matchMedia('(max-width: 976px)').matches) {
        $('#publiver').attr('src', 'img/publi_vert.jpg');
    };
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#publiver').attr('src', 'img/publi_vert2.png');
    };
});
$(function () {
    $('#logo').data('size', 'big');
});

$(window).scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        if ($(document).scrollTop() > 0) {
            if ($('#logo').data('size') == 'big') {
                $('#logo').data('size', 'small');
                $('#logo').stop().animate({
                    height: '150%'
                }, 600);
            }
        }
        else {
            if ($('#logo').data('size') == 'small') {
                $('#logo').data('size', 'big');
                $('#logo').stop().animate({
                    height: '280%'
                }, 600);
            }
        }
    } else {
        if ($(document).scrollTop() > 0) {
            if ($('#logo').data('size') == 'big') {
                $('#logo').data('size', 'small');
                $('#logo').stop().animate({
                    height: '100px'
                }, 600);
            }
        }
        else {
            if ($('#logo').data('size') == 'small') {
                $('#logo').data('size', 'big');
                $('#logo').stop().animate({
                    height: '150px'
                }, 600);
            }
        }
    }
});

$(function () {
    $('.navbar-nav').data('size', 'big');
});

$(window).scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {

    } else {
        if ($(document).scrollTop() > 0) {
            if ($('.navbar-nav').data('size') == 'big') {
                $('.navbar-nav').data('size', 'small');
                $('.navbar-nav').stop().animate({
                    height: '50px'
                }, 600);

            }
        }
        else {
            if ($('.navbar-nav').data('size') == 'small') {
                $('.navbar-nav').data('size', 'big');
                $('.navbar-nav').stop().animate({
                    height: '100px'
                }, 600);

            }
        }
    }

});

$(function () {
    $('.navbar-nav > li > a').data('size', 'big');
});

$(window).scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        //...
    } else {
        if ($(document).scrollTop() > 0) {
            if ($('.navbar-nav > li > a').data('size') == 'big') {
                $('.navbar-nav > li > a').data('size', 'small');
                $('.navbar-nav > li > a').stop().animate({
                    'line-height': '14px'
                }, 600);
            }
        }
        else {
            if ($('.navbar-nav > li > a').data('size') == 'small') {
                $('.navbar-nav > li > a').data('size', 'big');
                $('.navbar-nav > li > a').stop().animate({
                    'line-height': '75px'
                }, 600);
            }
        }
    }

});
