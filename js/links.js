$(function () {
    
    $('.message').hide();
    
    function showContact (hover, show) {
        
        var $hover = $(hover);
        var $show = $(show);
        
        $hover.mouseover(function () {
            $show.show();
            $hover.mouseleave(function (){
                $show.hide();
            });
        });
    }
    
    showContact('#icon1', '#msg1');
    showContact('#icon2', '#msg2');
    showContact('#icon3', '#msg3');
    showContact('#icon4', '#msg4');
    
    function changeAbout(link, show, image, color) {
        var $link = $(link);
        var $show = $(show);
        
        $link.click(function(){
            $('#about').css('background-image', "url('" + image + "')");
            $('.about-nav li').css('color', color)
            

        });
    }
    
    changeAbout('#about1', 'show', 'img/background-test.jpg', '#acacae');
    changeAbout('#about2', 'show', 'img/dpwedding-bg.jpg', 'black');
    changeAbout('#about3', 'show', 'img/swagwise-bg.jpg', 'black');
    
});