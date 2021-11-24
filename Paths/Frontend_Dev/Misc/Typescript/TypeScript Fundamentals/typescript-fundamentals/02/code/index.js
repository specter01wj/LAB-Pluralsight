var x = 7;
var y = 11;
var sum = x + y;
var result = "The sum of " + x + " and " + y + " is " + sum;
console.log(result);
var output = document.querySelector('#output');
if (output) {
    output.innerHTML = result;
}
