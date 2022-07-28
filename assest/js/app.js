$(document).ready(function() {
    $(".news_card_wrapper.owl-carousel").owlCarousel({
        items: 1,
        // loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        margin: 30,
    });
    $(".post_withe_carousel.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        margin: 30,
        center: true,
        stagePadding: 250,

    });
    $(".most_viewd_slider.owl-carousel").owlCarousel({
        items: 1,
        // loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        margin: 30,
        center: true,
        // stagePadding: 250,

    });
    $(".popular_video_box.owl-carousel").owlCarousel({
        items: 1,
        center: true,
        // loop: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 1000,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'video-1',
        margin: 10,
        dots: false,



    });
    $(".popular_video_url_hash.owl-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        loop: false,
        nav: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 20,
        dots: false,

    });

    $(".modifi_post.owl-carousel.owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: false,
        nav: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 10,
        dots: true,

    });


})