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
})