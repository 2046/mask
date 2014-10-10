define(function(require, exports, module){
    'use strict'

    var expect, isIE6;

    expect = require('expect');
    isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1;

    function equals(){
        var args = arguments;
        expect(args[0]).to.equal(args[1]);
    };

    describe('mask', function(){
        var mask;

        beforeEach(function(){
            mask = require('mask');
        });

        afterEach(function(){
            mask.hide();
        });

        it('mask show & hide', function(done){
            mask.show();
            expect(mask.element.is(':visible')).to.be.ok();
            mask.hide();
            setTimeout(function(){
                expect(mask.element.is(':visible')).not.to.be.ok();
                done();
            }, 900);
        });

        it('mask default style', function(){
            mask.show();
            expect(['#000', 'rgb(0, 0, 0)']).to.contain(mask.element.css('backgroundColor'));
            equals(mask.element.css('zIndex') * 1, 998);
        });

        it('mask className', function(){
            mask.set('className', 'ui-mask').show();
            equals(mask.element.hasClass('ui-mask'), true);
        });

        it('mask single instance', function(){
            var oldMask = mask;
            var newMask = require('mask');
            expect(oldMask).to.be(newMask);
        });
    });
});