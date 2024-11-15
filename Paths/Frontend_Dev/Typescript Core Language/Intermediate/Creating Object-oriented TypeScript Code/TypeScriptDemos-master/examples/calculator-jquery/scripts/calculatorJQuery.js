$(document).ready(function () {
    var calc = new CalculatorjQuery('X', 'Y', 'Output');
});
var CalculatorjQuery = /** @class */ (function () {
    function CalculatorjQuery(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }
    CalculatorjQuery.prototype.wireEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val().toString()), parseInt(_this.y.val().toString())).toString());
        });
        $('#Subtract').click(function (event) {
            _this.output.html(_this.subtract(parseInt(_this.x.val().toString()), parseInt(_this.y.val().toString())).toString());
        });
    };
    CalculatorjQuery.prototype.add = function (x, y) {
        return x + y;
    };
    CalculatorjQuery.prototype.subtract = function (x, y) {
        return x - y;
    };
    return CalculatorjQuery;
}());
//# sourceMappingURL=calculatorJQuery.js.map