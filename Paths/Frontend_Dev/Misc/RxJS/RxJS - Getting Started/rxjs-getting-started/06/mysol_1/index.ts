import { Observable, of, from, fromEvent, concat, interval, throwError } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



let timesDiv = document.getElementById('times');
let button = document.getElementById('timerBtn');

let timer$ = new Observable(subscriber => {
  let i = 0;
  let intervalID = setInterval(() => {
    subscriber.next(i++);
  }, 1000);

  return () => {
    console.log('Executing teardown code.');



    
    clearInterval(intervalID);
  }
});


let cancelTimer$ = fromEvent(button, 'click');


let timerSubscription = timer$.pipe(
	// take(3)
	takeUntil(cancelTimer$)
)
.subscribe(
	value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
	null,
	() => console.log('All Done!')
);










