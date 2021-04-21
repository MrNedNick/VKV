$(function() {

    let headerH = $('#header').innerHeight();

    let wrapper = document.querySelector('#wrapper');
    let nav = document.querySelector('#nav');
    let scrollOffset = 0;

    

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= 50 && scrollOffset < 150) {
            wrapper.style.transform = 'scale(1.5)';
        } else if(scrollOffset >= 150 && scrollOffset < 250) {
            wrapper.style.transform = 'scale(2)',
            wrapper.style.opacity = 1,
            nav.style.opacity = 0;;
        } else if(scrollOffset >= 250 && scrollOffset < 350) {
            wrapper.style.transform = 'scale(2.5)',
            wrapper.style.opacity = 1,
            nav.style.opacity = 0;;
        } else if(scrollOffset >= 350 && scrollOffset < 450) {
            wrapper.style.transform = 'scale(3)',
            wrapper.style.opacity = 1,
            nav.style.opacity = 0;;
        } else if(scrollOffset >= 450 && scrollOffset < 550) {
            wrapper.style.transform = 'scale(3.5)',
            wrapper.style.opacity = 1,
            nav.style.opacity = 0;;
        } else if(scrollOffset >= 550) {
            wrapper.style.transform = 'scale(4.0)',
            wrapper.style.opacity = 0,
            nav.style.opacity = 1;
        } else {wrapper.style.transform = 'scale(1.0)',
                wrapper.style.opacity = 1,
                nav.style.opacity = 0;}
    });

});


