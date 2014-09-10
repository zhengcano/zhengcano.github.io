$(function () {
    $('.contact-thumb').hide();
    $('.message').hide();
    
    function showContact (hover, show, img) {
        
        var $hover = $(hover);
        var $show = $(show);
        var $img = $(img);
        
        $hover.mouseover(function () {
            $show.fadeIn(500);
            $img.fadeIn(500);
            $hover.mouseleave(function (){
                $('.message').hide();
                $('.contact-thumb').hide();
            });
        });
    }
    
    showContact('#icon1', '#msg1', '#ct1');
    showContact('#icon2', '#msg2', '#ct2');
    showContact('#icon3', '#msg3', '#ct3');
    showContact('#icon4', '#msg4', '#ct4');

    
    function changeAbout(link, show, image, color) {
        var $link = $(link);
        var $show = $(show);
        
        $link.click(function(){
            $('#about').css('background-image', "url('" + image + "')");
            $('.about-nav li').css('color', color);         

        });
    }
    
    changeAbout('#about1', 'show', 'img/background-test.jpg', '#e1e1e4');
    changeAbout('#about2', 'show', 'img/dpwedding-bg.jpg', 'black');
    changeAbout('#about3', 'show', 'img/swagwise-bg.jpg', 'black');
    
    
});

//Preload Images

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['img/background-test.jpg','img/dpwedding-bg.jpg','img/swagwise-bg.jpg']).preload();