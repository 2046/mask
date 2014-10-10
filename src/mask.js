'use strict'

var Mask, Overlay, isIE6;

Overlay = require('overlay');
isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;

Mask = Overlay.extend({
    attrs : {
        width : '100%',
        height : '100%',
        zIndex : 998,
        position : 'fixed',
        style : {
            top : 0,
            left : 0,
            opacity : 0.2,
            backgroundColor : '#000'
        }
    },
    _onRenderPosition : function(val){
        if(isIE6){
            val = 'absolute';
        }

        this.element.css('position', val);
    },
    _onRenderHeight : function(val){
        if(isIE6){
            val = $(document).outerHeight(true);
        }

        this.element.css('height', val);
    }
});

module.exports = new Mask();