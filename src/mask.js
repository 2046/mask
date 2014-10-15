'use strict'

var Mask, Overlay, isIE6;

Overlay = require('overlay');
isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;

Mask = Overlay.extend({
    attrs : {
        width : '100%',
        height : '100%',
        zIndex : 998,
        style : {
            position : isIE6 ? 'absolute' : 'fixed',
            top : 0,
            left : 0,
            opacity : 0.2,
            backgroundColor : '#000'
        }
    },
    _onRenderHeight : function(val){
        var ctx = this;

        if(!isIE6){
            ctx.element.css('height', val);
        }else{
            setTimeout(function(){
                ctx.element.css('height', $(document).outerHeight(true));
            }, 0);
        }
    }
});

module.exports = new Mask();