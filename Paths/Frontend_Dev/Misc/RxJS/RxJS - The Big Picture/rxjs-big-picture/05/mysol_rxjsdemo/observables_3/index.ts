import { Observable, from } from 'rxjs';

let nums = [2, 4, 6, 7, 8, 10];


let evenNumbers$ = Observable.create(subscriber => {

	for(let currentNum of nums) {
		if(currentNum % 2 === 0) {
			subscriber.next(currentNum);
		} else {
			subscriber.error('Value is not even.');
		}
	}

	subscriber.complete();

});

evenNumbers$.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);






