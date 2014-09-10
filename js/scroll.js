$(document).ready(function(){

    var $window = $(window);
    
    function scrollability () {
        var winWidth = $window.width();

        //PARALLAX SCROLLING ON COMPUTERS ONLY
        if (winWidth >= 992) {
            $('section[data-type="background"]').each(function(){
                var $bgobj = $(this); // assigning the object
                $window.scroll(function () {
                    var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                    // Put together our final background position
                    var coords = '50% '+ yPos + 'px';
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
                });
            });

            //scroll function for skills img
             var $bgobj = $('#skills'); // assigning the object
                $window.scroll(function () {
                    var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                    // Put together our final background position
                    var coords = '85% '+ yPos + 'px';
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
                });
    
        //Bind about menu to scroll
        $(document).bind('scroll', function () {
            var link = $('#about-wrapper');
            var scroll = $window.scrollTop();
           $window.scroll(function(){
                if( scroll >= 630 && scroll <= 1020 ) {
                link.css('opacity', 0.9/(390/(scroll - 630) ) );
            } else if (scroll < 700) {
                link.css('opacity', 0);
            } else {
                link.css('opacity', 0.9);
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
            var link = $('#head article div');
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
        }
    }
    
    scrollability();
    
    $window.resize(function(){
        scrollability();
    })
    
    $('#contact-scroll').click(function(){
        $('html, body').animate({scrollTop: 1681}, 500);
    })

    
    
});

// Create HTML5 elements for IE
                     
document.createElement("article");
document.createElement("section");