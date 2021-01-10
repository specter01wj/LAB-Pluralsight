var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.greet = function (msg) {
        this.element.innerHTML = msg.greeting;
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.greet({ greeting: 'Hello from the Greeter Class!' });
};
//# sourceMappingURL=greeter.js.map