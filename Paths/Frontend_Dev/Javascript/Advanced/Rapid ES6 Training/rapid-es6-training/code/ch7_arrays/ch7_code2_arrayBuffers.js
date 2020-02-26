
'use strict';

let buffer1 = new ArrayBuffer(1024);
console.log(buffer1.byteLength);



let buffer2 = new ArrayBuffer(1024);
buffer2[0] = 0xff;
console.log(buffer2[0]);
























