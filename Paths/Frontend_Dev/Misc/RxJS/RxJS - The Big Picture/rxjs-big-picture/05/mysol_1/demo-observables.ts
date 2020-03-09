import { Observable, from } from 'rxjs';

let nums = [-2, -1, 0, 1, 2];

let numsObservable$ = from(nums);

let observer = {
	next: (value) => console.log(value),
	error: (err) => console.log(`ERROR: ${err}`),
	complete: () => console.log('All done.')
};

numsObservable$.subscribe(observer);






