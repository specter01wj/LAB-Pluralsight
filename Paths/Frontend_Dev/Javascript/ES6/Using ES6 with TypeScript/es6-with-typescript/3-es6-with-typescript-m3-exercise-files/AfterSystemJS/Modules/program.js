System.register(['./wowify', 'jquery'], function(exports_1) {
    "use strict";
    var wowify_1, jquery_1;
    var interestingThings, result;
    return {
        setters:[
            function (wowify_1_1) {
                wowify_1 = wowify_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }],
        execute: function() {
            interestingThings = ['The Sun', 'The Moon', 'The Stars'];
            result = wowify_1.default.apply(void 0, interestingThings);
            jquery_1.default('#result').html(result.join('<br/>'));
        }
    }
});
