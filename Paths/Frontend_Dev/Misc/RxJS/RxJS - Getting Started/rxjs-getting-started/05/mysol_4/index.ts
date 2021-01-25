import { Observable, of, from, fromEvent, concat, interval, throwError } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



let timesDiv = document.getElementById('times');
let button = document.getElementById('timerButton');

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

let timerSubscription = timer$.subscribe(
	value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
	null,
	() => console.log('All Done!')
);










