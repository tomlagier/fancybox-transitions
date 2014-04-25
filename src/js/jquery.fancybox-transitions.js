/**
 * name:        FancyBox Transitions
 * file:        jquery.fancybox-transitions.js
 * version:     0.1
 * author:      Thomas Lagier
 * description: Adds CSS3 open/close transitions for FancyBox 2.
 * license:     MIT
 * date:        April 25, 2014
 */

(function ($, F) {
    
    // Opening animation - fly from the top
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.top = (parseInt(endPos.top, 10) - 200) + 'px';
        endPos.opacity = 0;
        
        F.wrap.css(endPos).show().animate({
            top: '+=200px',
            opacity: 1
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    // Closing animation - fly to the top
    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=200px',
            opacity: 0
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };

    //Super scale
    F.transitions.superscaleIn = function() {

        F.wrap.addClass('superscale');

        setTimeout(function(){
            F.wrap.addClass('superscale-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.superscaleOut = function() {

        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('superscale superscale-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //Fade and scale
    F.transitions.fadescaleIn = function() {

        F.wrap.addClass('fadescale');

        setTimeout(function(){
            F.wrap.addClass('fadescale-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.fadescaleOut = function() {

        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('fadescale fadescale-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //Slide in from right
    F.transitions.sliderightIn = function() {

        F.wrap.addClass('slideright');

        setTimeout(function(){
            F.wrap.addClass('slideright-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.sliderightOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('slideright slideright-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //Slide in from bottom
    F.transitions.slidebottomIn = function() {

        F.wrap.addClass('slidebottom');

        setTimeout(function(){
            F.wrap.addClass('slidebottom-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.slidebottomOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('slidebottom slidebottom-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //Newspaper twirl
    F.transitions.newspaperIn = function() {

        F.wrap.addClass('newspaper');

        setTimeout(function(){
            F.wrap.addClass('newspaper-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.newspaperOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('newspaper newspaper-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //Fall
    F.transitions.fallIn = function() {

        F.wrap.addClass('fall');

        setTimeout(function(){
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.fallOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('fall');
            F._afterZoomOut();
        }, 300);

    }

    //Fall from the side
    F.transitions.sidefallIn = function() {

        F.wrap.addClass('sidefall');

        setTimeout(function(){
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.sidefallOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('sidefall');
            F._afterZoomOut();
        }, 300);

    }

    //Another drop in, slightly faster
    F.transitions.stickyupIn = function() {

        F.wrap.addClass('stickyup');

        setTimeout(function(){
            F.wrap.addClass('show stickyup-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.stickyupOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('stickyup stickyup-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //3D horizontal flip
    F.transitions.horizontalflipIn = function() {

        F.wrap.addClass('horizflip');

        setTimeout(function(){
            F.wrap.addClass('show horizflip-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.horizontalflipOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('horizflip horizflip-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //3D vertical flip
    F.transitions.verticalflipIn = function() {

        F.wrap.addClass('vertflip');

        setTimeout(function(){
            F.wrap.addClass('show vertflip-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.verticalflipOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('vertflip vertflip-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //3D Sign
    F.transitions.signIn = function() {

        F.wrap.addClass('sign');

        setTimeout(function(){
            F.wrap.addClass('show sign-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.signOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('sign sign-transitions');
            F._afterZoomOut();
        }, 300);

    }

    //3D Slit
    F.transitions.slitIn = function() {

        F.wrap.addClass('slit');

        setTimeout(function(){
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }

    F.transitions.slitOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('slit');
            F._afterZoomOut();
        }, 300);

    }

    //3D rotate bottom
    F.transitions.rotatebottomIn = function() {

        F.wrap.addClass('rotatebottom');

        setTimeout(function(){
            F.wrap.addClass('show rotatebottom-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.rotatebottomOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('rotatebottom-transitions rotatebottom');
            F._afterZoomOut();
        }, 300);

    }

    //3D rotate left
    F.transitions.rotateleftIn = function() {

        F.wrap.addClass('rotateleft');

        setTimeout(function(){
            F.wrap.addClass('show rotateleft-transitions');
            F._afterZoomIn();
        });

    }

    F.transitions.rotateleftOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('rotateleft-transitions rotateleft');
            F._afterZoomOut();
        }, 300);

    }

    //Blur
    F.transitions.blurIn = function() {

        F.wrap.siblings().not('.fancybox-wrap').not('.fancybox-overlay').addClass('blur-overlay');
        F.wrap.addClass('blur');

        setTimeout(function(){
            F.wrap.addClass('blur-transitions show');
            F._afterZoomIn();
        });

    }

    F.transitions.blurOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('blur-transitions blur');
            F.wrap.siblings().not('.fancybox-wrap').not('.fancybox-overlay').removeClass('blur-overlay');
            F._afterZoomOut();
        }, 300);

    }

})(jQuery, jQuery.fancybox);