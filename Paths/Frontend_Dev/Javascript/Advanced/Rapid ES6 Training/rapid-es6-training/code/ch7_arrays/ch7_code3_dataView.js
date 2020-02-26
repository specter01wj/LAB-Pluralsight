
'use strict';

let buffer1 = new ArrayBuffer(1024);
console.log(buffer1.byteLength);



let buffer2 = new ArrayBuffer(1024);
buffer2[0] = 0xff;
console.log(buffer2[0]);


console.log("------------");


let buffer3 = new ArrayBuffer(1024);
let a1 = new Int8Array(buffer3);
a1[0] = 0xff;
console.log(a1[0]);



let buffer4 = new ArrayBuffer(1024);
let a2 = new Uint8Array(buffer4);
a2[0] = 0xff;
console.log(a2[0]);



let buffer5 = new ArrayBuffer(1024);
let a3 = new Uint8ClampedArray(buffer5);
a3[0] = -12;
console.log(a3[0]);



let buffer6 = new ArrayBuffer(1024);
let a4 = new Uint8Array(buffer6);
let b4 = new Uint16Array(buffer6);
a4[0] = 12;
// console.log(a4);
// console.log(b4);
console.log(b4[0]);



let buffer7 = new ArrayBuffer(1024);
let a5 = new Uint8Array(buffer7);
let b5 = new Uint16Array(buffer7);
a5[1] = 11;
console.log(a5);
console.log(b5);
console.log(b5[0]);


















