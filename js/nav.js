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

