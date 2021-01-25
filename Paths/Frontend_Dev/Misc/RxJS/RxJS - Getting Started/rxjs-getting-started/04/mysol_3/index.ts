import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let timesDiv = document.getElementById('times');
let button = document.getElementById('timerBtn');

let timer$ = interval(1000);


let timerObserver = {
	next: (value) => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};

let timerObserverUnsubscribe = {
	next: (event) => timerSubscription.unsubscribe(),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};



let timerSubscription = timer$.subscribe(timerObserver);


let clicks$ = fromEvent(button, 'click');


clicks$.subscribe(timerObserverUnsubscribe);







