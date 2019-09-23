var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Foo1 = (function () {
    function Foo1(thingy) {
        this.thingy = thingy;
        console.log(thingy);
        thingy *= 2;
    }
    Object.defineProperty(Foo1.prototype, "employeeId", {
        get: function () {
            return this._employeeId;
        },
        enumerable: true,
        configurable: true
    });
    Foo1.prototype.doSomething = function () {
    };
    return Foo1;
}());
var x = new Foo1(4);
x.employeeId = "";
console.log(x.thingy);
var Contact = (function () {
    function Contact(_a) {
        var name = _a.name, phone = _a.phone, _b = _a.email, email = _b === void 0 ? undefined : _b;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    Contact.prototype.greet = function (greetee) {
        return "Hello, " + greetee + ", my name is " + this.name;
    };
    return Contact;
}());
var alice = new Contact({ name: 'Alice', phone: '555-1212' });
console.log(JSON.stringify(alice));
console.log(alice.greet("Tim"));
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(_a) {
        var name = _a.name, phone = _a.phone, _b = _a.email, email = _b === void 0 ? undefined : _b, employeeID = _a.employeeID, hireDate = _a.hireDate;
        _super.call(this, { name: name, phone: phone, email: email });
        this.employeeID = employeeID;
        this.hireDate = hireDate;
    }
    Object.defineProperty(Employee.prototype, "employeeID", {
        get: function () {
            return this._employeeID;
        },
        set: function (value) {
            this._employeeID = (value || "").toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.greet = function (greetee) {
        return _super.prototype.greet.call(this, greetee) + " By the way, I'm an employee!";
    };
    return Employee;
}(Contact));
var pat = new Employee({
    name: 'Pat',
    phone: '555-1213',
    hireDate: new Date('2015-01-01'),
    employeeID: "abc123" });
console.log(pat.hireDate.toUTCString());
console.log(pat.greet('Renee'));
console.log(pat instanceof Employee);
console.log(pat instanceof Contact);
console.log("The employee ID is '" + pat.employeeID + "'");
console.log(JSON.stringify(pat));
var useFakes = true;
if (!useFakes) {
    var MyWebService = new ((function () {
        function MyWebService() {
        }
        MyWebService.prototype.getData = function (id) {
        };
        return MyWebService;
    }()))();
}
else {
    var MyWebService = new ((function () {
        function Fake_MyWebService() {
        }
        Fake_MyWebService.prototype.getData = function (id) {
            console.log("Just logging: " + id);
        };
        return Fake_MyWebService;
    }()))();
}
var webService = MyWebService;
webService.getData(5);
var TestStatic = (function () {
    function TestStatic() {
        TestStatic.count += 1;
    }
    TestStatic.doubleNumber = function (num) {
        return num * 2;
    };
    TestStatic.count = 0;
    return TestStatic;
}());
console.log(TestStatic.doubleNumber(10));
var ts1 = new TestStatic();
var ts2 = new TestStatic();
console.log(TestStatic.count);
var Sprite = (function () {
    function Sprite() {
        this.name = "";
    }
    return Sprite;
}());
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.apply(this, arguments);
    }
    Player.prototype.update = function () {
    };
    return Player;
}(Sprite));
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        _super.apply(this, arguments);
    }
    Monster.prototype.update = function () {
    };
    return Monster;
}(Sprite));
var p = new Player();
