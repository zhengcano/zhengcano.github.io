$(document).ready(function(){

    var $window = $(window);

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
        // Move the background
        $bgobj.css({ backgroundPosition: coords });
        });
    });
    
    $(document).bind('scroll', function(){
        var link = $('.about-nav li');
        var scroll = $window.scrollTop();
       $window.scroll(function(){
            if( scroll >= 700 && scroll <= 1020 ) {
            link.css('opacity', 1/(320/(scroll - 700) ) );
        } else if (scroll < 700) {
            link.css('opacity', 0);
        } else {
            link.css('opacity', 1);
        }
       });
    });
    
    $(document).bind('scroll', function(){
        var link = $('article div');
        var scroll = $window.scrollTop();
       $window.scroll(function(){
            if( scroll >= 200 && scroll <= 700 ) {
            link.css('opacity', 1/(scroll/200 ) );
        } else if (scroll > 700) {
            link.css('opacity', 0);
        } else {
            link.css('opacity', 1);
        }
       });
    });

    
    
});

// Create HTML5 elements for IE
                     
document.createElement("article");
document.createElement("section");