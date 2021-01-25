import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let timesDiv = document.getElementById('times');
let button = document.getElementById('timerBtn');


let books$ = from(allBooks);


function timeSubscribe(subscriber) {
	const timeString = new Date().toLocaleTimeString();

	if(timeString === null) {
		subscriber.error('Incorrect timeString.');
	}

	subscriber.next(timeString);

	setTimeout(() => {
		subscriber.complete();
	}, 2000);


}


let timeObserver = {
	next: (value) => console.log(`Observer ${cnt}: ${value}`),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


let currentTime$ = new Observable(timeSubscribe);


let cnt = 1;
currentTime$.subscribe(timeObserver);



setTimeout(() => {
	cnt++;
	currentTime$.subscribe(timeObserver);
}, 1000);


setTimeout(() => {
	cnt++;
	currentTime$.subscribe(timeObserver);
}, 2000);














