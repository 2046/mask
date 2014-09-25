define(function(require, exports, module){
    'use strict'
    
    var Mask, Widget, isIE6, styles;
    
    Widget = require('widget');
    styles = require('./mask.style');
    isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;
    
    Mask = Widget.extend({
        attrs : {
            styles : styles,
            visible : false,
            className : null
        },
        init : function(){
            isIE6 && this.element.css('position', 'absolute');
            isIE6 && this.set('height', $(document).outerHeight(true));
        }
    });
    
    module.exports = new Mask();
});