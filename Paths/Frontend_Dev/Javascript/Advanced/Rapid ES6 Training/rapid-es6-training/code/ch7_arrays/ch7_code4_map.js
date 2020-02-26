
'use strict';

let buffer1 = new ArrayBuffer(1024);
let dv1 = new DataView(buffer1);
console.log(dv1.byteLength);



let buffer2 = new ArrayBuffer(1024);
let dv2 = new DataView(buffer2, 0, 32);
console.log(dv2.byteLength);



let buffer3 = new ArrayBuffer(1024);
let dv3 = new DataView(buffer3);
dv3.setUint8(0, 1);
console.log(dv3.getUint16(0));



let buffer4 = new ArrayBuffer(1024);
let dv4 = new DataView(buffer4);
dv4.setUint8(0, 1);
console.log(dv3.getUint16(0, true));



















