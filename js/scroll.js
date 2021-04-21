$(function() {

    let headerH = $('#header').innerHeight();

    let wrapper = document.querySelector('#wrapper');
    let scrollOffset = 0;

    

    $(window).on('scroll', function () {
        
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= 100 && scrollOffset < 200) {
            wrapper.style.transform = 'scale(1.5)';
        } else if(scrollOffset >= 200 && scrollOffset < 300) {
            wrapper.style.transform = 'scale(2)';
        } else if(scrollOffset >= 300 && scrollOffset < 400) {
            wrapper.style.transform = 'scale(2.5)';
        } else if(scrollOffset >= 400 && scrollOffset < 500) {
            wrapper.style.transform = 'scale(3)';
        } else if(scrollOffset >= 500 && scrollOffset < 600) {
            wrapper.style.transform = 'scale(3.5)';
        } else if(scrollOffset >= 600 && scrollOffset < 700) {
            wrapper.style.transform = 'scale(4)';
        } else if(scrollOffset >= 800 && scrollOffset < 900) {
            wrapper.style.transform = 'scale(4.5)';
        } else if(scrollOffset >= 1000 && scrollOffset < 1100) {
            wrapper.style.transform = 'scale(5)';
        } else if(scrollOffset >= 1100 && scrollOffset < 1200) {
            wrapper.style.transform = 'scale(5.5)';
        } else {wrapper.style.transform = 'scale(1.0)';}


        console.log(scrollOffset);
    });

});


