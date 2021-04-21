$(function() {

    let headerH = $('#header').innerHeight();

    let wrapper = document.querySelector('#wrapper');
    let nav = document.querySelector('#nav');
    let scrollOffset = 0;

    

    $(window).on('scroll', function () {
        
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= 1 && scrollOffset < 120) {
            wrapper.style.transform = 'scale(1.5)';
        } else if(scrollOffset >= 120 && scrollOffset < 200) {
            wrapper.style.transform = 'scale(2)';
        } else if(scrollOffset >= 200 && scrollOffset < 300) {
            wrapper.style.transform = 'scale(2.5)';
        } else if(scrollOffset >= 300 && scrollOffset < 400) {
            wrapper.style.transform = 'scale(3)';
        } else if(scrollOffset >= 400 && scrollOffset < 500) {
            wrapper.style.transform = 'scale(3.5)';
        } else if(scrollOffset >= 500) {
            wrapper.style.transform = 'scale(4)',
            wrapper.style.opacity = 0,
            nav.style.opacity = 1;
        } else {wrapper.style.transform = 'scale(1.0)',
                wrapper.style.opacity = 1,
                nav.style.opacity = 0;}
    });

});


