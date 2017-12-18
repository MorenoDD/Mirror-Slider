(function($) {

    var $mddShare = $('#mdd-share'),
        $mddShareOpen = $('#mdd-share--open'),
        $mddShareClose = $('#mdd-share--close'),
        $mddShareLayer = $('#mdd-share--layer');

    $mddShareOpen.on('click', function(){
        $mddShare.addClass('in');
        return false;
    });

    $mddShareClose.on('click', function(){
        $mddShare.removeClass('in');
        return false;
    });

    $mddShareLayer.find('.md-share').on('click', function(){
        window.open(jQuery(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });
    
    var $mirrorSlider = $('#mirror-slider'),
        $slides = $mirrorSlider.find('.slides'),
        $current = 0,
        $isMoving = false;

    $slides.find('li').each(function(){
        var $image = $(this).find('img');
        $(this).append('<div class="mirror"><div><span></span></div><div><span></span></div></div>');
        $(this).find('.mirror div span').css({
            'background-image' :  'url('+$image.attr('src')+')'
        });
        $image.remove();
    });

    $mirrorSlider.find('.nav a').on('click', function(){
        if(!$isMoving){
            $isMoving = true;
            $slides.find('li').eq($current).addClass('next-out');

            if($(this).data('dir') === 'prev'){
                
                $current--;
                if($current < 0 ){
                    $current = $slides.find('li').length - 1;
                }

            } else {

                $current++;
                if($current > ($slides.find('li').length - 1) ){
                    $current = 0;
                }

            }

            $slides.find('li').eq($current).addClass('next-in');

            setTimeout(function(){
                $slides.find('li.current').removeClass();
                $slides.find('li').eq($current).removeClass().addClass('current');
                $isMoving = false;
            }, 800);
        }

        return false;
    });

    setTimeout(function(){
        $slides.find('li').eq(0).removeClass('first').addClass('current');
    }, 10);

})(jQuery);