import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let timesDiv = document.getElementById('times');
let button = document.getElementById('timerBtn');

// let timer$ = interval(1000);
let timer$ = new Observable(timerSubscribe);


let timerObserver = {
	next: (value) => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};

let timerObserver2 = {
	next: (value) => console.log(`${new Date().toLocaleTimeString()} (${value})`),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};

let timerObserverUnsubscribe = {
	next: (event) => timerSubscription.unsubscribe(),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


function timerSubscribe(subscriber) {
	let i = 10;

	let intervalID = setInterval(() => {
		subscriber.next(i++);
	}, 1000);

	return () => {
		console.log('Executing teardown code.');
		clearInterval(intervalID);
	}
}


let timerSubscription = timer$.subscribe(timerObserver);

let timerConsoleSubscription = timer$.subscribe(timerObserver2);

timerSubscription.add(timerConsoleSubscription);
// timerSubscription.remove(timerConsoleSubscription);


let clicks$ = fromEvent(button, 'click');


clicks$.subscribe(timerObserverUnsubscribe);







