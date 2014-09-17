define(function(require, exports, module){
    'use strict'
    
    var Mask, Widget, isIE6, tpl, style;
    
    Widget = require('widget');
    style = require('./mask.style');
    isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;
    
    Mask = Widget.extend({
        attrs : {
            styles : style,
            visible : false,
            className : null
        },
        show : function(){
            if(!this.rendered){
                this.render();
                this.element.addClass(this.get('className'));
            }
    
            isIE6 && this.element.css('position', 'absolute');
            isIE6 && this.set('height', $(document).outerHeight(true));
            this.set('visible', true);
            return this;
        },
        hide : function(){
            this.set('visible', false);
            return this;
        },
        _onChangeClassName : function(val){
            this.element.addClass(val);
        },
        _onChangeVisible : function(val){
            this.element[val ? 'fadeIn' : 'fadeOut']();
        }
    });
    
    module.exports = new Mask();
});