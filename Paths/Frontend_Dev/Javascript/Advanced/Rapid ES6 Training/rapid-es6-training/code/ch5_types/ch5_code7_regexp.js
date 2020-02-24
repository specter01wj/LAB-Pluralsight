
'use strict';


console.log('\u{1f3c4}');

let pattern1 = /\u{1f3c4}/;
console.log(pattern1.test('\u{1f3c4}'));



let pattern2 = /\u{1f3c4}/u;
console.log(pattern2.test('\u{1f3c4}'));



let pattern3 = /^.Surfer/;
console.log(pattern3.test('\u{1f3c4}Surfer'));



let pattern4 = /^.Surfer/u;
console.log(pattern4.test('\u{1f3c4}Surfer'));













