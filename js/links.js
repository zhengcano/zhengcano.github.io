$(function () {
    //HIDE CONTENT AND HEADER ANIMATION
    $('#smaller1').hide();
    $('#name').hide();
    $('#smaller2').hide();
    $('#project-info').hide();
    
    $('#smaller1').fadeIn(1000);
    setTimeout(function(){
        $('#name').fadeIn(1000);
        setTimeout(function(){
            $('#smaller2').show("drop", {direction: 'down'}, 1000);
        }, 1000);
    }, 1000);
    
    $('.contact-thumb').hide();
    $('.message').hide();
    
     //ABOUT ME AND PROJECT "LINK"
    
    function aboutToggle(link, content) {
        var $link = $(link);
        var $content = $(content);
        
        console.log($link);
        console.log($content);
        
        $link.click(function(){
            $('.about-content').hide();
            $content.fadeIn();
                    
        });
        
    }
  
    aboutToggle('#about1', '#my-info');
    aboutToggle('#about2', '#project-info');
    
    
    
    //SHOW CONTACT INFO ON HOVER
    function showContact (hover, show, img) {
        
        if ($(window).width() >= 992 ) {
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
    }
    
    showContact('#icon1', '#msg1', '#ct1');
    showContact('#icon2', '#msg2', '#ct2');
    showContact('#icon3', '#msg3', '#ct3');
    showContact('#icon4', '#msg4', '#ct4');
    
    $(window).resize(function(){
        
        showContact('#icon1', '#msg1', '#ct1');
        showContact('#icon2', '#msg2', '#ct2');
        showContact('#icon3', '#msg3', '#ct3');
        showContact('#icon4', '#msg4', '#ct4');
        
    });
    
   
    
    
    //CHANGE BG ON PROJECT LINK HOVER
    function changeBG(link, image) {
        if ($(window).width() >= 992) {
            var $link = $(link);
        
        $link.mouseover(function(){
            $('#about').css('background-image', "url('" + image + "')");
            $('#skills').css('background-image', "url('img/languagesr.png')");
            $('.about-nav li').css('color', '#000000');
            
            
            $link.mouseleave(function(){
                $('#about').css('background-image', "url('img/background-test.jpg')");
                $('.about-nav li').css('color', '#ffffff');
                $('#skills').css('background-image', "url('img/languages.png')");
                
            });

        });
        }
    }
    
    changeBG('#dp-wedding a', 'img/dpwedding-bg.jpg');
    changeBG('#swagwise a', 'img/swagwise-bg.jpg');
    
    $(window).resize(function(){
        changeBG('#dp-wedding a', 'img/dpwedding-bg.jpg');
        changeBG('#swagwise a', 'img/swagwise-bg.jpg');
    });
    
});

//Preload Images

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['img/background-test.jpg','img/dpwedding-bg.jpg','img/swagwise-bg.jpg']).preload();