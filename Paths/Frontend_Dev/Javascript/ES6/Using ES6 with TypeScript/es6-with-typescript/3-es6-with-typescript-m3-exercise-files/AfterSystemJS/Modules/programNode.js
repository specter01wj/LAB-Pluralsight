System.register(['./wowify', 'chalk'], function(exports_1) {
    "use strict";
    var wowify_1, chalk;
    var interestingThings, result;
    return {
        setters:[
            function (wowify_1_1) {
                wowify_1 = wowify_1_1;
            },
            function (chalk_1) {
                chalk = chalk_1;
            }],
        execute: function() {
            interestingThings = ['The Sun', 'The Moon', 'The Stars'];
            result = wowify_1.default.apply(void 0, interestingThings);
            console.log(chalk.bold.yellow(result.join('\n')));
        }
    }
});
