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
    
});