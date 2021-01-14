var x = 5;
var y = 5;
var isLoaded = false;
var firstName = 'John';
var lastName = 'Doe';
var pets = ['Fido', 'Lassie', 'Rover'];
var info = { address: '1234 Anywhere St.', city: 'Seattle' };
window.onload = function () {
    var z = x + y;
    console.log('x + y = ' + z);
    console.log('isLoaded = ' + isLoaded);
    console.log('Pets List:');
    for (var i = 0; i < pets.length; i++) {
        console.log(pets[i]);
    }
    console.log('Info: ' + info.address + ' ' + info.city);
};
//# sourceMappingURL=basicTypes.js.map