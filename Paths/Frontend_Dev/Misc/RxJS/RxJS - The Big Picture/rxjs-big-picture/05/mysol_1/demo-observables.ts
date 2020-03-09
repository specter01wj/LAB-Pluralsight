import { Observable, from } from 'rxjs';

let nums = [2, 4, 6, 8, 10];

let numsObservable$ = from(nums);

let observer = {
	next: (value) => console.log(value),
	error: (err) => console.log(`ERROR: ${err}`),
	complete: () => console.log('All done.')
};

numsObservable$.subscribe(observer);






