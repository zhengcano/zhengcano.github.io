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
    
    //Bind about menu to scroll
    $(document).bind('scroll', function(){
        var link = $('.about-nav li');
        var scroll = $window.scrollTop();
       $window.scroll(function(){
            if( scroll >= 700 && scroll <= 1020 ) {
            link.css('opacity', 0.8/(320/(scroll - 700) ) );
        } else if (scroll < 700) {
            link.css('opacity', 0);
        } else {
            link.css('opacity', 0.8);
        }
       });
    });
   
     //Bind contact info to scroll
    $(document).bind('scroll', function () {
        var link = $('#contact h2');
        var scroll = $window.scrollTop();
        
        $window.scroll(function(){
            
            if( scroll >= 1020) {

            link.css('opacity', 0.9/(800/(scroll - 881) ) );

            } else {

            link.css('opacity', 0);

            }
        });
    });
    
    $(document).bind('scroll', function () {
        var link = $('#contact-content');
        var scroll = $window.scrollTop();
        
        $window.scroll(function(){
            
            if( scroll >= 1020) {

            link.css('opacity', 0.9/(800/(scroll - 1020) ) );

            } else {

            link.css('opacity', 0);

            }
        });
    });

    
        
    $(document).bind('scroll', function(){
        var link = $('article div');
        var scroll = $window.scrollTop();
       $window.scroll(function(){
            if( scroll >= 200 && scroll <= 700 ) {
            link.css('opacity', 0.9/(scroll/200 ) );
        } else if (scroll > 700) {
            link.css('opacity', 0);
        } else {
            link.css('opacity', 0.9);
        }
       });
    });

    
    
});

// Create HTML5 elements for IE
                     
document.createElement("article");
document.createElement("section");