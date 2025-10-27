
'use strict';

let title = 'James Wang';
console.log(title.startsWith('Ja'));


console.log(title.endsWith('an'));


console.log(title.includes('es'));


let title2 = "Jin's \u{1f3c4} Blog";
console.log(title2);


let surfer = "\u{1f3c4}";
console.log(surfer.length);


let surfer2 = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer2).length);
console.log(surfer2);


let title3 = "Mazatla\u0301n";
console.log(title3 + ' ' + title3.length);


let title4 = "Mazatla\u0301n";
console.log(title4 + ' ' + title4.normalize().length);


let title5 = "Mazatla\u0301n";
console.log(title5.normalize().codePointAt(7).toString(16));


console.log(String.fromCodePoint(0x1f3c4));


let title6 = "Surfer";
let output = String.raw`${title6}\u{1f3c4}\n`;
console.log(output);


let wave = "\u{1f30a}";
console.log(wave.repeat(10));
let wave2 = "\u{1f33c}";
console.log(wave2.repeat(20));






