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

