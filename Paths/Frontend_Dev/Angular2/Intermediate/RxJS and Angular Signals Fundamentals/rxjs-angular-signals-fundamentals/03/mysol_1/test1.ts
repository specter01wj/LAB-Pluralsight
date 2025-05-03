import { of, from, fromEvent } from 'rxjs';

let a1 = fromEvent(document, 'click');

a1.subscribe(val => {
  console.log('Click Event:', val.target);
});





