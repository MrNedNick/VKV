var $ScalebleBg = $(".scaleble-bg"),
    wh = $(window).height(),
    i = 525,
    lastScroll = 0;

$ScalebleBg.css('width','525px');

$(document).scroll(function() {
    
    if( $(document).scrollTop() > ($ScalebleBg.offset().top - wh) ) {
    
        var CurentScroll = $(this).scrollTop();
        
        if (CurentScroll > lastScroll) {
            i+=10;
        } else {
            i-=10;
        }
        
        lastScroll = CurentScroll;
        
        $ScalebleBg.css('width', i + 'px');
      
    };
    
});

var $ScalebleBg = $(".scaleble-bg"),
    wh = $(window).height(),
    i = 525,
    lastScroll = 0;

$ScalebleBg.css('height','525px');

$(document).scroll(function() {
    
    if( $(document).scrollTop() > ($ScalebleBg.offset().top - wh) ) {
    
        var CurentScroll = $(this).scrollTop();
        
        if (CurentScroll > lastScroll) {
            i+=1;
        } else {
            i-=1;
        }
        
        lastScroll = CurentScroll;
        
        $ScalebleBg.css('height', i + 'px');
      
    };
    
});