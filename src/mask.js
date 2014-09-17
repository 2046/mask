'use strict'

var Mask, Widget, isIE6, tpl, style;

Widget = require('widget');
tpl = require('./mask.tpl');
style = require('./mask.style');
isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;

Mask = Widget.extend({
    attrs : {
        width : null,
        height : null,
        styles : style,
        opacity : null,
        visible : false,
        template : tpl,
        className : 'ui-mask',
        backgroundColor : null
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
    _onChangeWidth : function(val){
        this.element.css('width', val);
    },
    _onChangeHeight : function(val){
        this.element.css('height', val);
    },
    _onChangeOpacity : function(val){
        this.element.css('opacity', val);
    },
    _onChangeBackgroundColor : function(val){
        this.element.css('backgroundColor', val);
    },
    _onChangeVisible : function(val){
        this.element[val ? 'fadeIn' : 'fadeOut']();
    }
});

module.exports = new Mask();