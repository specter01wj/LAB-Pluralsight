var DefiningClasses;
(function (DefiningClasses) {
    var Engine = /** @class */ (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        return Engine;
    }());
    var Car = /** @class */ (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value == undefined)
                    throw 'Please supply an engine';
                this._engine = value;
            },
            enumerable: false,
            configurable: true
        });
        Car.prototype.start = function () {
            render('Car engine started ' + this._engine.engineType);
        };
        return Car;
    }());
    function render(text) {
        document.getElementById('container').innerHTML += text + '<br />';
    }
    window.onload = function () {
        var engine = new Engine(300, 'V8');
        var car = new Car(engine);
        render(car.engine.engineType);
        car.start();
    };
})(DefiningClasses || (DefiningClasses = {}));
//# sourceMappingURL=definingClasses.js.map