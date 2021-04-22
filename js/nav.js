$(function() {

    let nav = $("#nav"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // fixed nav
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        
});

    function checkScroll () {
        if(scrollOffset >= headerH) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    }

});

$(function() {

    let about = $("#about"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // fixed about
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        
});

    function checkScroll () {
        if(scrollOffset >= headerH) {
            about.addClass("fixed");
        } else {
            about.removeClass("fixed");
        }
    }

});

// smooth scroll
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});

// menu nav Toggle
$('#nav_toggle').on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $('#nav__items').toggleClass("active");
});