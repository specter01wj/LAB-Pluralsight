class Contact {
    email: string;
    phone: string;
    name: string;
    public greet(greetee: string){
      return `Hello, ${greetee}, my name is ${this.name}`;
    }
    constructor({name, phone, email = undefined}) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

const alice = new Contact({name:'Alice', phone:'555-1212'});
console.log(JSON.stringify(alice));
console.log(alice.greet("Tim"));

class Employee extends Contact {
  private _employeeID: string;
  get employeeID() {
    return this._employeeID;
  }
  set employeeID(value) {
    this._employeeID = (value || "").toLocaleUpperCase();
  }
  hireDate: Date;
  greet(greetee: string) {
    return super.greet(greetee) + " By the way, I'm an employee!";
  }
  constructor({name, phone, email = undefined, employeeID, hireDate}) {
    super({name, phone, email});
    this.employeeID = employeeID;
    this.hireDate = hireDate;
  }
}

const pat = new Employee({
  name: 'Pat',
  phone: '555-1213',
  hireDate: new Date('2015-01-01'),
  employeeID: "abc123"});

console.log(pat.hireDate.toUTCString());
console.log(pat.greet('Renee'));
console.log(pat instanceof Employee);
console.log(pat instanceof Contact);
console.log(`The employee ID is '${pat.employeeID}'`);
console.log(JSON.stringify(pat));

const useFakes = true;

if (!useFakes) {
  var MyWebService = new (class MyWebService {
    getData(id) {
      //expensive call.
    }
  })();
} else {
  var MyWebService = new (class Fake_MyWebService {
    getData(id) {
      console.log(`Just logging: ${id}`);
    }
  })();
}

var webService = MyWebService;
webService.getData(5);


class TestStatic {
  static doubleNumber(num) {
    return num * 2;
  }
  static count = 0;
  constructor() {
    TestStatic.count += 1;
  }
}

console.log(TestStatic.doubleNumber(10));
var ts1 = new TestStatic();
var ts2 = new TestStatic();
console.log(TestStatic.count);


interface ISprite {
  x: number;
  y: number;
  imageUrl: string;
  update: () => void;
  name: string;
}

abstract class Sprite implements ISprite {
  x: number;
  y: number;
  imageUrl: string;
  abstract update();
  name = "";
}

class Player extends Sprite {
  update() {
    //check for input.
  }
}
class Monster extends Sprite {
  update() {
    //run AI
  }
}

const p = new Player();
