"use strict";
exports.__esModule = true;
var ds = require("./dataservice");
var dataservice = new ds.DataService();
var Alerter = /** @class */ (function () {
    function Alerter() {
        this.name = 'John';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        alert(msg + ', ' + this.name);
    };
    ;
    return Alerter;
}());
exports.Alerter = Alerter;
