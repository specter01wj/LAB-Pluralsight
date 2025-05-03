import { fromEvent } from 'rxjs';
console.log('✅ Script loaded');
let a1 = fromEvent(document, 'click');
let b1 = fromEvent(document, 'keydown');
a1.subscribe(val => {
    console.log('Click Event:', val.target);
});
b1.subscribe(val => {
    console.log('Key Event:', val.key);
});
