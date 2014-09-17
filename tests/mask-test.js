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

        it('mask show', function(done){
            mask.show();
            expect(mask.element.is(':visible')).to.be.ok();
            mask.hide();
            setTimeout(function(){
                expect(mask.element.is(':visible')).not.to.be.ok();
                done();
            }, 900);
        });

        it('mask default styles', function(done){
            mask.show();
            var color = mask.element.css('backgroundColor');
            equals(color === 'rgb(0, 0, 0)' || color === '#000', true);
            setTimeout(function(){
                equals(Number(mask.element.css('opacity')).toFixed(1), '0.2');
                done();
            }, 500);
        });

        it('mask className', function(){
            mask.set('className', 'ui-mask').show();
            equals($('.ui-mask').length, 1);
        });

        it('mask single instance', function(){
            var oldMask = mask;
            var newMask = require('mask');
            expect(oldMask).to.be(newMask);
        });
    });
});