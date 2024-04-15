"use strict";
exports.__esModule = true;
var strength_pipe_1 = require("./strength.pipe");
fdescribe('StrengthPipe', function () {
    it('should display weak if strength is 5', function () {
        var pipe = new strength_pipe_1.StrengthPipe();
        expect(pipe.transform(5)).toEqual('5 (weak)');
    });
    it('should display strong if strength is 10', function () {
        var pipe = new strength_pipe_1.StrengthPipe();
        expect(pipe.transform(10)).toEqual('10 (strong)');
    });
});
